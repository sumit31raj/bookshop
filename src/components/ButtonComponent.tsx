import React from "react";
import { Box, Button, Stack } from "@mui/material";
type Props = {
  onClick: () => void;
};

function ButtonComponent({ onClick }: Props) {
  return (
    <Stack
      justifyContent="center" // Center horizontally
      alignItems="center"
    >
      <Box padding={10}>
        <Button variant="contained" onClick={onClick}>
          Load More Books
        </Button>
      </Box>
    </Stack>
  );
}

export default ButtonComponent;
