import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Team from "./Components/Team";
import Courses from "./Components/Course";
import Gallery from "./Components/Gallery";
import TeamMember from "./Components/TeamMember";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <Courses />
      <Product />
      <Team />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:slug" element={<TeamMember />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
