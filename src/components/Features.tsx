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
      <Grid container rowGap={5} columnGap={5} justifyContent={"center"}>
        <FeatureCard
          featureName="70000+ Books"
          featureDescription="Book listings with descriptions and author information"
        ></FeatureCard>
        <FeatureCard
          featureName="Recommendations"
          featureDescription="Suggests books based on  your favourites and preferences."
        ></FeatureCard>
        <FeatureCard
          featureName="Read Free"
          featureDescription="All the books, in all format, available all the times"
        ></FeatureCard>
        <FeatureCard
          featureName="Let us know"
          featureDescription="Your feedback allows us to improve our product"
        ></FeatureCard>
      </Grid>
    </Container>
  );
};

export default Feature;
