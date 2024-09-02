// Components
import SectionTitle from "../ui/SectionTitle";
import ReadMoreBtn from "../ui/ReadMoreBtn";
// Images
import AboutImage from "../../assets/about.avif";

const About = () => {
  return (
    <section className="p-5">
      <SectionTitle text="About Us" />
      <div className="mt-5 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <img
          src={AboutImage}
          alt="About Us Page Image"
          className="md:clip-inset h-full object-cover"
        />
        <div className="max-md:text-center">
          <h3 className="text-3xl font-bold">
            Driven by Excellence: Your Trusted Automotive Experts
          </h3>
          <p className="mt-2">
            At AutoCare, we are more than just a car service and repair shop—we
            are a team of dedicated professionals who are passionate about
            keeping your vehicle running smoothly and safely. With years of
            experience in the automotive industry, our mission is to provide
            top-quality service, expert advice, and exceptional customer care.
            Whether you need routine maintenance, complex repairs, or
            performance upgrades, we are committed to ensuring that every mile
            you drive is a confident one. Trust us to treat your vehicle with
            the care and precision it deserves, and experience the difference
            with AutoCare.
          </p>
          <ReadMoreBtn styles="mt-4 max-md:mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
