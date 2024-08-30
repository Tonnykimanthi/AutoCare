import Car from "../../assets/car.png";
import Hero from "../../assets/hero.avif";

import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section
      className={`bg-dark text-light flex h-screen items-center justify-around bg-cover bg-no-repeat p-5 max-md:flex-col max-md:justify-center`}
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="max-md:mt-20 max-md:text-center">
        <h1 className="text-5xl font-bold max-md:text-3xl">
          Drive with Confidence,
          <br /> Every Mile
        </h1>
        <Button text="REACH US" styles="mt-5 rounded-full px-10" />
      </div>

      <img src={Car} alt="Car" className="h-96 w-96" />
    </section>
  );
};

export default HeroSection;
