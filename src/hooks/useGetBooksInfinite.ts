import React, { useEffect, useState } from "react";
import axios, { isCancel } from "axios";
import { Book } from "@/types";

export const useGetBooksInfinite = function (page: number) {
  const [bookList, setBookList] = useState<Book[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);
    async function fetchBooks() {
      try {
        const res = await axios({
          url: `${process.env.NEXT_PUBLIC_API_URL}/?page=${page}`,
          method: "GET",
          signal: controller.signal,
        });
        const results = res.data.results;
        setBookList((prev) => [...prev, ...results]);
        setHasMore(res.data.count > bookList.length);
        setLoading(false);
      } catch (error) {
        if (isCancel(error)) return;
        setError(true);
      }
    }

    fetchBooks();
    return () => {
      controller.abort();
    };
  }, [page]);

  return { loading, error, bookList, hasMore };
};
