import React, { useEffect, useState } from "react";
import { get, isRequestCancelled } from "@/service/api";
import { USER_ID } from "@/constants";

interface FavouriteBookResponse {
  id: string;
  bookId: string;
}

const responseParser = (book: FavouriteBookResponse): string => book.bookId;

export const useGetFavouriteBooks = () => {
  const [favBooksIds, setFavBooksIds] = useState<{ [key:string]: boolean }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchFavouriteBooksId = async () => {
    setLoading(true);
    setError(false);

    try {
      const userId = localStorage.getItem(USER_ID);
      const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/books/favourites/${userId}}`;
      const res = await get(url);

      setFavBooksIds(res.data.result.map(responseParser).reduce((acc: { [key: string]: boolean }, cur: string) => {
        acc[cur] = true;
        return acc;
      }, {}));

    } catch (error: unknown) {
      if (isRequestCancelled(error as Error)) {
        return;
      }
      setError(true);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchFavouriteBooksId();
  }, []);

  return {
    loading,
    error,
    favBooksIds,
    refetch: fetchFavouriteBooksId,
  };
};
