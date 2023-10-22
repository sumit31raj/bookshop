import React from "react";
import { useGetBooksInfinite } from "@/hooks/useGetBooksInfinite";
import { useGetFavouriteBooks } from "@/hooks/useGetFavouriteBooks";
import { Box, Container, Grid, Button } from "@mui/material";
import BookCard from "./BookCard";
import CircularProgress from "@mui/material/CircularProgress";

const Booklist = () => {
  const { loading, books, hasMore, getNext } = useGetBooksInfinite();
  const { favBooksIds, refetch } = useGetFavouriteBooks();

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {books.map((book) => (
          <BookCard refresh={refetch} book={book} isFavourite={favBooksIds[book.id]} />
        ))}
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        {loading ? 
          <CircularProgress /> : 
          hasMore && <Button variant="outlined" onClick={getNext}>Load More</Button>
        }
      </Box>
    </Container>
  );
};

export default Booklist;
