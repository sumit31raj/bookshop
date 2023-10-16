import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Book } from "@/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NavBar from "@/components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    async function fetchBooks(id: number) {
      const res = await fetch(`https://gutendex.com/books/${id}`);
      const data = await res.json();
      // console.log(book);
      setBook(data);
    }

    fetchBooks(+router.query.slug!);
  }, []);

  let content = book ? (
    <Grid container component="main">
      <Grid item xs={12} sm={4} md={7}>
        <CardMedia
          component="img"
          alt="books"
          image={
            book?.formats?.["image/jpeg"] || "fallback-image-url-if-undefined"
          }
          sx={{ maxHeight: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* Author Name : {book?.authors[0].name.split(",").reverse().join(" ")} */}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {book?.copyright}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {book?.subjects?.join(", ")}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {book?.bookshelves?.join(",")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Box></Box>
        </Box>
      </Grid>
    </Grid>
  ) : (
    <div>Loading///</div>
  );

  return (
    <>
      <NavBar></NavBar>
      {content}
    </>
  );
};

export default Page;
