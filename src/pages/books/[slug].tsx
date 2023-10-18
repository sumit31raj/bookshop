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
import { Container, LinearProgress } from "@mui/material";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const { slug } = router.query;
    async function fetchBooks(id: number) {
      try {
        const res = await fetch(`https://gutendex.com/books/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBook(data);
        } else {
          console.error(
            "Error fetching book data: ",
            res.status,
            res.statusText
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching book data: ", error);
      }
    }

    if (slug) {
      fetchBooks(+slug); // Use the slug parameter
    }
  }, [router.query]);

  let content = book ? (
    <Container>
      <Grid
        container
        padding={10}
        rowGap={0}
        sx={{ display: "flex", maxHeight: "100%" }}
      >
        <Grid item xs={12} sm={4} lg={7}>
          <Box display="inline-block">
            <CardMedia
              component="img"
              alt="books"
              image={
                book?.formats?.["image/jpeg"] ||
                "fallback-image-url-if-undefined"
              }
            />
          </Box>
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
                  Author Name :{" "}
                  {book?.authors[0].name.split(",").reverse().join(" ")}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {book?.download_count}
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
    </Container>
  ) : (
    <Box sx={{ backgroundColor: "red", padding: 3 }}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Box>
  );

  return <>{content}</>;
};

export default Page;
