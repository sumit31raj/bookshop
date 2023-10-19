import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import NavItems from "@/constants/navigationItems";
import { NavItem } from "@/types";

import MenuBookIcon from "@mui/icons-material/MenuBookOutlined";
import { Box, Typography } from "@mui/material";
import DrawerElement from "./DrawerElement";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
  });

  return (
    <AppBar position="static" color="primary">
      <StyledToolbar>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              justifyContent: "-moz-initial",
            }}
          >
            <MenuBookIcon></MenuBookIcon>
            <Typography>Outlast</Typography>{" "}
          </Link>
        </Box>
        <Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <DrawerElement></DrawerElement>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
            }}
          >
            {NavItems.map((item: NavItem) => (
              <Link key={item.name} href={item.href}>
                <Button color="secondary">{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Box>
        <Box>
          <Link href="#" target="_blank">
            <Button color="secondary">Create an Account</Button>
          </Link>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
