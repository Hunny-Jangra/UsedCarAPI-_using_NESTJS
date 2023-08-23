import { Box } from "@chakra-ui/react";
import Header from "../src/components/Header";
import Hero from "./components/Hero";
import CarsPage from "./components/CarsPage";
import Accessories from "./components/Accessories";
import Accordions from "./components/Accordion";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
        <Route path="/home" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<CarsPage />}/>
        <Route path="/accessories" element={<Accessories />}/>
    </Route>
  )
)
const App: React.FC<{}> = () => {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
