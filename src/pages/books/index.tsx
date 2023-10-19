import Booklist from "@/components/Booklist";
import HeroBooks from "@/components/HeroBooks";
import { Container } from "@mui/material";
import React from "react";
import Head from "next/head";

type Props = {};

const books = (props: Props) => {
  return (
    <>
      <Head>
        <title>Our Books</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <HeroBooks></HeroBooks>
        <Booklist></Booklist>
      </Container>
    </>
  );
};

export default books;
