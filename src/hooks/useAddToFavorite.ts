import React, { useState } from "react";
import { post } from "@/service/api";
import { USER_ID } from "@/constants";

export const useAddToFavorite = (bookId: string, callback: () => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addTofavourite = async () => {
    setLoading(true);
    setError(false);
    try {
      const userId = localStorage.getItem(USER_ID);

      const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/books/favourites/${userId}}`;
      await post(url, { bookId: bookId.toString() });

      callback();
    } catch (error: unknown) {
      setError(true);
    }
    setLoading(false);
  }

  return {
    loading,
    error,
    addTofavourite,
  };
};
