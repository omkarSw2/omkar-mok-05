import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
};

export default AllRoutes;
