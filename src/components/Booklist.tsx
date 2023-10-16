import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Book } from "@/types";
import { Box, Button } from "@mui/material";
import { useInfinite } from "@/hooks/useInfinite";

type Props = {};

const Booklist = (props: Props) => {
  const [pageNum, setPagenum] = useState(1);

  const { loading, error, bookList, hasMore } = useInfinite(pageNum);

  const pageHandler = function () {
    setPagenum((prev) => prev + 1);
  };

  // console.log(bookList);

  let content =
    bookList.length > 0 ? (
      bookList.map((book: Book) => {
        return (
          <div key={book.id}>
            <BookCard
              id={book.id}
              title={book.title}
              author={book?.authors[0]?.name ?? "Unknown Author"}
              downloadCount={book.download_count}
            ></BookCard>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    );
  return (
    <Box>
      <Box>{content}</Box>
      <Box>{error && <p>Error</p>}</Box>
      {loading && "loading"}
      {hasMore && <Button onClick={pageHandler}>Load More Books</Button>}
    </Box>
  );
};

export default Booklist;
