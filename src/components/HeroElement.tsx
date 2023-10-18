import Link from "next/link";
import React from "react";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";

const HeroElement = () => {
  return (
    <Container sx={{ minHeight: "80vh" }}>
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
          <Typography
            variant="h3"
            component="h1"
            color="common.white"
            padding={8}
          >
            Outlast Bookshelf: Your Gateway to a World of Stories
          </Typography>
          <Typography color="common.white" padding={2}>
            Are you ready to embark on an epic literary journey? At Outlast,
            we're passionate about books, and we're on a mission to bring the
            magic of reading to your doorstep.
          </Typography>
          <Typography
            variant="h6"
            color="common.white"
            padding={2}
            textAlign={"center"}
          >
            Explore Outlast today
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Link href="/books">
              <Button variant="contained">Explore Books</Button>
            </Link>
            <Link href="#">
              <Button variant="outlined" color="secondary">
                Learn more
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default HeroElement;
