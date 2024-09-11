import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Components
import SectionTitle from "../ui/SectionTitle";
import Testimonial from "../ui/Testimonial";
// Constants
import testimonialsList from "../../constants/testimonials";
// Icons
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current === testimonialsList.length - 1) {
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  };
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(testimonialsList.length - 1);
      return;
    }
    setCurrent(current - 1);
  };

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
    window.addEventListener("resize", () => {
      setCurrent(0);
    });
  }, []);

  return (
    <section className="relative mt-5 p-5 max-sm:px-2">
      <SectionTitle text="Testimonials" />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mt-5 overflow-hidden"
      >
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
      </motion.div>
      {/* Square buttons */}
      <div className="mt-2 flex items-center justify-center gap-x-5">
        <button
          onClick={handleFirstSlide}
          className={`size-4 ${current === 0 ? "bg-primary" : "bg-dark/20 dark:bg-slate-500"}`}
        ></button>
        <button
          onClick={handleSecondSlide}
          className={`size-4 ${current === 1 ? "bg-primary" : "bg-dark/20 dark:bg-gray-500"}`}
        ></button>
        <button
          onClick={handleThirdSlide}
          className={`size-4 md:hidden ${current === 2 ? "bg-primary" : "bg-dark/20 dark:bg-gray-500"}`}
        ></button>
        <button
          onClick={handleFourthSlide}
          className={`size-4 sm:hidden ${current === 3 ? "bg-primary" : "bg-dark/20 dark:bg-gray-500"}`}
        ></button>
        <button
          onClick={handleFirfthSlide}
          className={`size-4 sm:hidden ${current === 4 ? "bg-primary" : "bg-dark/20 dark:bg-gray-500"}`}
        ></button>
        <button
          onClick={handleSixthSlide}
          className={`size-4 sm:hidden ${current === 5 ? "bg-primary" : "bg-dark/20 dark:bg-gray-500"}`}
        ></button>
      </div>
      {/* Prev & Next button for mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full border border-light bg-dark p-1 text-light transition duration-300 active:scale-110 sm:hidden"
      >
        <MdNavigateBefore className="size-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-light bg-dark p-1 text-light transition duration-300 active:scale-110 sm:hidden"
      >
        <MdNavigateNext className="size-7" />
      </button>
    </section>
  );
};

export default Testimonials;
