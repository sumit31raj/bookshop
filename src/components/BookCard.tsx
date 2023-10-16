import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Link from "next/link";

type BookDescription = {
  id: number;
  title: string;
  author: string;
  downloadCount: number;
};

const BookCard = (props: BookDescription) => {
  return (
    <Card sx={{ maxWidth: 400, margin: 10 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14, alignItems: "center" }}
          color="text.secondary"
          gutterBottom
        >
          Title:{props.title}
        </Typography>
        <span>☆ Add to Favourites</span>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Author Name : {props.author.split(",").reverse().join(" ")}
        </Typography>
        <Typography variant="body2">
          <br />
          Download Count : {props.downloadCount}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          href={{
            pathname: "/books/[slug]",
            query: { slug: props.id },
          }}
        >
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};

export default BookCard;
