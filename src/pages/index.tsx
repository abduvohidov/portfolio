import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "../widgets/Navbar";
import { Footer } from "../widgets/Footer";
import { Backend } from "./Backend";
import { FrontendSkills } from "./Frontend";
import { FrontendPortfolio } from "./Frontend";

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend/skills" element={<FrontendSkills />} />
        <Route path="/frontend/portfolio" element={<FrontendPortfolio />} />
        <Route path="/backend" element={<Backend />} />
      </Routes>
      <Footer />
    </>
  );
};
