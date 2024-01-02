import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "../widgets/Navbar";
import { Footer } from "../widgets/Footer";

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
