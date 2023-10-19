import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavItems from "@/constants/navigationItems";
import { NavItem } from "@/types";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

type Anchor = "top" | "left" | "bottom" | "right";

export default function DrawerElement() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {NavItems.map((NavItem: NavItem) => (
          <ListItem key={NavItem.id} disablePadding>
            <ListItemButton>
              <Link
                href={NavItem.href}
                style={{
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                <ListItemText primary={NavItem.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{ color: "white" }}>
            <MenuIcon></MenuIcon>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <Button
              sx={{ backgroundColor: "rebeccapurple", color: "white" }}
              onClick={toggleDrawer(anchor, false)}
            >
              X
            </Button>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
