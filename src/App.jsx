import "./App.css";
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Team from "./Components/Team";
import Courses from "./Components/Course";
import Gallery from "./Components/Gallery";


function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <AboutUs/>
        <Service/> 
        <Courses/>
        <Product/>
        <Team/>
        <Gallery/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
