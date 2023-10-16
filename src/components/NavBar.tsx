import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import NavItems from "@/constants/navigationItems";
import { NavItem } from "@/types";
import { imageUrl } from "@/constants/imageUrl";
import Book from "../../public/Book.jpg";

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <div>
          <Link href="/">
            <Image src={Book} alt="logo" width={50} height={50} />
          </Link>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            {NavItems.map((item: NavItem) => (
              <Link key={item.name} href={item.href}>
                <Button color="inherit">{item.name}</Button>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link href="#" target="_blank">
            Create an Account
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
