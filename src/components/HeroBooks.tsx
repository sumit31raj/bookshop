import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

interface MainFeaturedPostProps {}

export default function HeroBooks(props: MainFeaturedPostProps) {
  return (
    <Paper
      sx={{
        position: "relative",

        my: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#00FF43",
        padding: 9,
        borderRadius: 11,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />

      <Grid item md={6}>
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            fontFamily="Poppins"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. E
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            os a saepe, laborum iste labore veniam? Pariatur quam mollitia
            distinctio itaque odit sit repellat, commodi quas nam cumque placeat
            omnis sint!
          </Typography>
        </Box>
      </Grid>
    </Paper>
  );
}
