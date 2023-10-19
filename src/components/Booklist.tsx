import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Book } from "@/types";
import { Box, Button, CircularProgress, LinearProgress } from "@mui/material";
import { useInfinite } from "@/hooks/useInfinite";
import Grid from "@mui/material/Unstable_Grid2";
import ButtonComponent from "./ButtonComponent";
import CircularProgressComponent from "./CircularLoader";

const Booklist = () => {
  const [pageNum, setPagenum] = useState(1);

  const { loading, error, bookList, hasMore } = useInfinite(pageNum);

  const pageHandler = function () {
    setPagenum((prev) => prev + 1);
  };

  // console.log(bookList);

  let content =
    bookList.length > 0 ? (
      <Grid container>
        {bookList.map((book: Book) => (
          <Grid
            xs={12}
            sm={8}
            md={6}
            lg={4}
            key={book.id}
            sx={{ maxHeight: "100%" }}
            justifyContent={"center"}
          >
            <BookCard
              id={book.id}
              title={book.title}
              author={book?.authors[0]?.name ?? "Unknown Author"}
              downloadCount={book.download_count}
            ></BookCard>
          </Grid>
        ))}
      </Grid>
    ) : (
      <Box>
        <LinearProgress color="success" />
      </Box>
    );
  return (
    <Box>
      <Box>{content}</Box>
      <Box>{error && <p>Error</p>}</Box>
      {loading && <CircularProgressComponent></CircularProgressComponent>}
      {hasMore && <ButtonComponent onClick={pageHandler}></ButtonComponent>}
    </Box>
  );
};

export default Booklist;
