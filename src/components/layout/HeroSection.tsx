import Car from "../../assets/car.png";
import Hero from "../../assets/hero.avif";

import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section
      className={`h-screen bg-dark bg-cover bg-no-repeat text-light`}
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="flex h-screen items-center justify-around p-5 transition max-md:flex-col max-md:justify-center dark:bg-dark dark:bg-opacity-50">
        <div className="max-md:mt-20 max-md:text-center">
          <h1 className="text-5xl font-bold max-md:text-3xl">
            Drive with Confidence,
            <br /> Every Mile
          </h1>
          <Button text="REACH US" styles="mt-5 rounded-full px-10" />
        </div>

        <img src={Car} alt="Car" className="h-96 w-96" />
      </div>
    </section>
  );
};

export default HeroSection;
