import Booklist from "@/components/Booklist";
import HeroBooks from "@/components/HeroBooks";
import { Container } from "@mui/material";
import React from "react";

type Props = {};

const books = (props: Props) => {
  return (
    <Container>
      <HeroBooks></HeroBooks>
      <Booklist></Booklist>
    </Container>
  );
};

export default books;
