import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddCardIcon from '@mui/icons-material/AddCard';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AdbIcon from '@mui/icons-material/Adb';

import React from "react";
//icon + title + path definition for menu items
// note : routers.jsx path and this path must match then it'll route if matches
export const menuItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "User Management",
    icon: <AccountBoxIcon />,
    path: "/usermanagement",
  },
  {
    title: "Dashboard",
    icon: <SpaceDashboardIcon />,
    path: "/dashboard",
  },
  {
    title: "Blogs",
    icon: <AddCardIcon />,
    path: "/blog",
  },
  {
    divider: true,
  },
  {
    title: "Contact",
    icon: <ContactsIcon />,
    path: "/contact",
  },
  {
    title: "About",
    icon: <AdbIcon />,
    path: "/about",
  },
];
