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
      <Box sx={{ padding: 10 }}>
        <Card>
          <CardMedia
            component="img"
            alt="Outlast"
            height="300"
            image="/bookshelf.jpg"
          />
        </Card>
        <Box className="flex flex-col items-center gap-10 absolute">
          <Typography
            variant="h3"
            component="h1"
            color="common.white"
            padding={8}
            sx={{ fontSize: { xs: 24, lg: 30 } }}
          >
            Outlast Bookshelf: Your Gateway to a World of Stories
          </Typography>
          <Typography color="common.white" padding={2}>
            Are you ready to embark on an epic literary journey? At Outlast, we
            are passionate about books, and we are on a mission to bring the
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
              flexDirection: { xs: "column", lg: "row" },
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
        </Box>
      </Box>
    </Container>
  );
};

export default HeroElement;
