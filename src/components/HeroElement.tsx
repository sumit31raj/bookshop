import Link from "next/link";
import React from "react";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

const HeroElement = () => {
  return (
    <section
      style={{ minHeight: "80vh" }}
      className="container mx-auto flex items-center justify-center"
    >
      <div>
        <Card>
          <CardMedia
            component="img"
            alt="Outlast"
            height="300"
            image="../../public/bookshelf.jpg"
          />
        </Card>
        <div className="flex flex-col items-center gap-10 absolute">
          <Typography variant="h3" component="h1" className="text-white">
            Outlast Bookshelf: Your Gateway to a World of Stories
          </Typography>
          <Typography className="text-white">
            Are you ready to embark on an epic literary journey? At Outlast,
            we're passionate about books, and we're on a mission to bring the
            magic of reading to your doorstep.
          </Typography>
          <Typography variant="h6" className="text-white">
            Join TradingFew and start trading today.
          </Typography>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button variant="contained">
              <Link href="/books"> Explore Books</Link>
            </Button>
            <Button variant="outlined">
              <Link href="#">Learn more →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroElement;
