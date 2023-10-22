import React, { useEffect, useState } from "react";
import { Book, Author, Format } from "@/types";
import { get, isRequestCancelled } from "@/service/api";

interface BookResponse {
  id: string;
  title: string;
  subjects: string[];
  authors: Author[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  download_count: number;
  formats: Format;
}

const responseParser = (book: BookResponse): Book => ({
  ...book,
  mediaType: book.media_type,
  downloadCount: book.download_count,
})

export const useGetBooksInfinite = () => {
  const [books, setBookList] = useState<Book[]>([]);

  const [pageNum, setPagenum] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [hasMore, setHasMore] = useState(false);

  const getNext = () => {
    setPagenum((prev) => prev + 1);
  }

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);

    async function fetchBooks() {
      try {
        const url = `${process.env.NEXT_PUBLIC_BOOKS_API_URL}/?page=${pageNum}`;
        const res = await get(url, controller.signal);

        const results = res.data.results.map(responseParser);
        
        setBookList((prev) => [...prev, ...results]);
        setHasMore(res.data.count > books.length);
        setLoading(false);
      } catch (error: unknown) {
        if (isRequestCancelled(error as Error)) {
          return;
        }
        setError(true);
      }
    }

    fetchBooks();
    
    return () => {
      controller.abort();
    };
  }, [pageNum]);

  return {
    loading,
    error,
    books,
    hasMore,
    getNext,
  };
};
