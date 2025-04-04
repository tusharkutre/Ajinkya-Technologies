import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icons
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import logo from "../assets/ajinkya_logo.png";

import { IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../config/MenuItems";

const DrawerList = ({ pathname }) => {
  return (
    <Box sx={{ width: 250, m: 1 }}>
      <Box sx={{ p: 1 }}>
        <a href="/">
          <img
            style={{ cursor: "pointer" }}
            draggable="false"
            loading="lazy"
            src={logo}
            alt="Ajinkya Technologies Logo"
            width={200}
          />
        </a>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              className="rounded-md"
              disablePadding
              sx={{
                backgroundColor: pathname === item.path && "#5D87FF",
              }}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  color: pathname === item.path && "white",
                }}
              >
                <ListItemIcon sx={{ color: pathname === item.path && "white" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    fontWeight: pathname === item.path && "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
            {item.divider && <Divider key={index} />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default function Navbar() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Toolbar>
        {isMobile && (
          <IconButton onClick={toggleDrawer(true)}>
            <MenuOpenIcon />
          </IconButton>
        )}
      </Toolbar>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={isMobile && toggleDrawer(false)}
      >
        <DrawerList pathname={pathname} />
      </Drawer>
    </>
  );
}