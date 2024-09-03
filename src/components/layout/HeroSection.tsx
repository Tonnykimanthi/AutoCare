import { motion } from "framer-motion";
// Variants
import { slideInLeft, scaleUp } from "../../utils/motion";
// Components
import Button from "../ui/Button";
// Images
import Car from "../../assets/car.png";
import Hero from "../../assets/hero.avif";

const HeroSection = () => {
  return (
    <section
      className={`h-screen bg-dark bg-cover bg-no-repeat text-light`}
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="flex h-screen items-center justify-around p-5 transition max-md:flex-col max-md:justify-center dark:bg-dark dark:bg-opacity-50">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="max-md:mt-20 max-md:text-center"
        >
          <h1 className="text-5xl font-bold max-md:text-3xl">
            Drive with Confidence,
            <br /> Every Mile
          </h1>
          <Button text="REACH US" styles="mt-5 rounded-full px-10" />
        </motion.div>
        <motion.div variants={scaleUp} initial="hidden" animate="visible">
          <img src={Car} alt="Car" className="h-96 w-96" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
