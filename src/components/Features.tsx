import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { LibraryAddCheck } from "@mui/icons-material";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: 10 }}>
      <Grid
        container
        rowSpacing={1}
        columnGap={5}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        justifyContent={"center"}
      >
        <FeatureCard></FeatureCard>
        <FeatureCard></FeatureCard>
        <FeatureCard></FeatureCard>
        <FeatureCard></FeatureCard>
      </Grid>
    </Container>
  );
};

export default Feature;
