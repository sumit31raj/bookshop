import Head from "next/head";
import React from "react";
import { Book } from "@/types";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, Container } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useAddToFavorite } from "@/hooks/useAddToFavorite";
import { useRemoveFavorite } from "@/hooks/useRemoveFavourite";
import { useGetFavouriteBooks } from "@/hooks/useGetFavouriteBooks";

interface BookDetailsPageProps {
  book: Book;
};

const BookDetailsPage = ({ book }: BookDetailsPageProps) => {

  const { favBooksIds, refetch } = useGetFavouriteBooks();
  const { addTofavourite, loading: addLoading, error: addError } = useAddToFavorite(book.id, refetch);
  const { removefavourite, loading: removeLoading, error: removeError } = useRemoveFavorite(book.id, refetch);

  const isFavourite = favBooksIds[book?.id]

  const actionToPerform = () => {
    if (isFavourite) {
      removefavourite();
    } else {
      addTofavourite();
    }
  }

  const loading = addLoading || removeLoading;

  return (
    <>
      <Head>
        <title>{book?.title || 'Not Found!'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3}}>
          <Link underline="hover" color="inherit" href="/">
            Books
          </Link>
          <Typography color="text.primary">{book?.title || 'Not Found'}</Typography>
        </Breadcrumbs>
        { !book && 
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Something went wrong! Please try again later!
          </Typography>
        }
        { book &&
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 500,
                  position: 'relative',
                }}
              >
                <Image
                  src={book.formats['image/jpeg'] || ''}
                  fill={true}
                  alt="Picture of the Book"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <React.Fragment>   
                  <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Book Details
                  </Typography>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell>Title: </TableCell>
                        <TableCell align="right">{book.title}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Authors: </TableCell>
                        <TableCell align="right">{book.authors.map(author => author.name).join(', ')}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Bookshelves: </TableCell>
                        <TableCell align="right">{book.bookshelves.join(', ')}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Copyright: </TableCell>
                        <TableCell align="right">{book.copyright}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>languages: </TableCell>
                        <TableCell align="right">{book.languages.join(', ')}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Subjects: </TableCell>
                        <TableCell align="right">{book.subjects.join(', ')}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Media Type: </TableCell>
                        <TableCell align="right">{book.mediaType}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Download Count: </TableCell>
                        <TableCell align="right">{book.downloadCount}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </React.Fragment>
              </Paper>
              <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <Button onClick={actionToPerform} variant="outlined">{isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}</Button>
              </Box>
            </Grid>
          </Grid>
        }
      </Container>
    </>
  );
};

export default BookDetailsPage;

export async function getServerSideProps(context: any) {
  try {
    const slug = context.query.slug;
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BOOKS_API_URL}/${slug}`);

    if (res.status === 200) {
      const book = res.data;
      return {
        props: { book },
      };
    } else {
      console.error("Error fetching book data: ", res.status, res.statusText);
    }
  } catch (error) {
    console.error("An error occurred while fetching book data: ", error);
  }

  return {
    props: { book: null }, // Handle the case where data fetching fails
  };
}
