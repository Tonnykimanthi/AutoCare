import About from "./components/layout/About";
import Booking from "./components/layout/Booking";
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
    </>
  );
}
// TODO
// BOOK FOR A SERVICE
// FOOTER

export default App;
