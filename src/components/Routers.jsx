import { Routes, Route } from "react-router-dom";
import React from "react";
// pages import here
import Home from "../pages/Home";
import UserManagement from "../pages/UserManagement";
import Dashboard from "../pages/Dashboard";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Users from "../userManagement/Users";
import Roles from "../userManagement/Roles";
import NewApp from "../NewApp.jsx";
import Contact from "../pages/Contact.jsx";

// All routings defined here 
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<NewApp/>} />
      {/* parent route */}
      <Route path="/usermanagement" element={<UserManagement />} />
      {/* nested/child routes */}
      <Route path="/usermanagement/users" element={<Users />} />
      <Route path="/usermanagement/roles" element={<Roles />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
