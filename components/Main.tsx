import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CarsPage from "../components/CarsPage";
import Accessories from "../components/Accessories";
import Accordions from "../components/Accordion";
import Footer from "../components/Footer";
const Main = () => {
  return (
    <>
      <Box width={"100%"}>
        <Hero />
        <CarsPage />
        <Accessories />
        <Accordions />
        <Footer />
      </Box>
    </>
  );
};

export default Main;
