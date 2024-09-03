import About from "./components/layout/About";
import Booking from "./components/layout/Booking";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HeroSection from "./components/layout/HeroSection";
import Services from "./components/layout/Services";
import Technicians from "./components/layout/Technicians";
import Testimonials from "./components/layout/Testimonials";
import FiguresInfo from "./components/ui/FiguresInfo";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <FiguresInfo />
      <Services />
      <Technicians />
      <Testimonials />
      <Booking />
      <Footer />
    </>
  );
}
// TODO
// FOOTER

export default App;
