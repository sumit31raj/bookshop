import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";
type Props = {};

function CircularProgressComponent({}: Props) {
  return (
    <Stack
      justifyContent="center" // Center horizontally
      alignItems="center"
    >
      <Box padding={10}>
        <CircularProgress color="success" />
      </Box>
    </Stack>
  );
}

export default CircularProgressComponent;
