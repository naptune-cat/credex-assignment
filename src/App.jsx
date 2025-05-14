import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhyToChooseUs from "./components/WhyToChooseUs";
function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <HowItWorks />
      <WhyToChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
