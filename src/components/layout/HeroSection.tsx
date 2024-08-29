import Car from "../../assets/car.png";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="text-lightGray bg-darkGray flex h-screen items-center justify-around bg-[url('https://images.unsplash.com/photo-1676288176672-0ed5d526a6c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1dG9tb3RpdmV8ZW58MHx8MHx8fDA%3D')] bg-cover bg-no-repeat p-5">
      <div>
        <h1 className="text-5xl font-bold">
          Drive with Confidence,
          <br /> Every Mile
        </h1>
        <Button text="REACH US" styles="mt-5 rounded-full"/>
      </div>

      <img src={Car} alt="Car" className="h-96 w-96" />
    </section>
  );
};

export default HeroSection;
