import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box gap={5} m={5}>
      <Link to="/">
        <Button ml={5} _hover={{ bg: "blue.600", color: "white" }}>
          Contact Management
        </Button>
      </Link>
      <Link to="/appointment">
        <Button ml={5} _hover={{ bg: "teal", color: "white" }}>
          Appointment Scheduling
        </Button>
      </Link>
    </Box>
  );
};

export default Navbar;
