import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

import Link from "next/link";
import { Star } from "@mui/icons-material";
import { Stack } from "@mui/material";

type BookDescription = {
  id: number;
  title: string;
  author: string;
  downloadCount: number;
};

const BookCard = (props: BookDescription) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: { xs: "0 auto", sm: 5 },

        color: "#021B3A",
        backgroundColor: "#CF4307",
        fontFamily: "Poppins",
        borderEndEndRadius: 11,
        borderStartRadius: 11,
      }}
    >
      <CardContent>
        <Stack
          direction="column"
          gap={2}
          alignItems="center"
          justifyContent={"center"}
          fontFamily={"Poppins"}
        >
          <Typography gutterBottom variant="h6" fontWeight={700}>
            {props.title}
          </Typography>
          <Button variant="outlined" color="secondary">
            <StarIcon></StarIcon>Add to Favourite
          </Button>

          <Typography>
            Author(s) : {props.author.split(",").reverse().join(" ")}
          </Typography>
          <Typography>Download Count : {props.downloadCount}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Link
          href={{
            pathname: "/books/[slug]",
            query: { slug: props.id },
          }}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};

export default BookCard;
