import { useEffect, useState } from "react";
// Components
import SectionTitle from "../ui/SectionTitle";
import Testimonial from "../ui/Testimonial";
// Constants
import testimonialsList from "../../constants/testimonials";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleFirstSlide = () => {
    setCurrent(0);
  };
  const handleSecondSlide = () => {
    setCurrent(1);
  };
  const handleThirdSlide = () => {
    setCurrent(2);
  };
  const handleFourthSlide = () => {
    setCurrent(3);
  };
  const handleFirfthSlide = () => {
    setCurrent(4);
  };
  const handleSixthSlide = () => {
    setCurrent(5);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrent(0);
    });
  }, []);

  return (
    <section className="mt-5 p-5 max-sm:px-2">
      <SectionTitle text="Testimonials" />
      <div className="mx-auto mt-5 overflow-hidden">
        <div
          className="flex transition duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {testimonialsList.map((testimonial, index) => (
            <Testimonial testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-x-5">
        <button
          onClick={handleFirstSlide}
          className={`size-4 ${current === 0 ? "bg-primary" : "bg-dark/20"}`}
        ></button>
        <button
          onClick={handleSecondSlide}
          className={`size-4 ${current === 1 ? "bg-primary" : "bg-dark/20"}`}
        ></button>
        <button
          onClick={handleThirdSlide}
          className={`size-4 md:hidden ${current === 2 ? "bg-primary" : "bg-dark/20"}`}
        ></button>
        <button
          onClick={handleFourthSlide}
          className={`size-4 sm:hidden ${current === 3 ? "bg-primary" : "bg-dark/20"}`}
        ></button>
        <button
          onClick={handleFirfthSlide}
          className={`size-4 sm:hidden ${current === 4 ? "bg-primary" : "bg-dark/20"}`}
        ></button>
        <button
          onClick={handleSixthSlide}
          className={`size-4 sm:hidden ${current === 5 ? "bg-primary" : "bg-dark/20"}`}
        ></button>
      </div>
    </section>
  );
};

export default Testimonials;
