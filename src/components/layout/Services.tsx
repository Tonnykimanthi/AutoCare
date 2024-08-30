// Components
import ServicesSlider from "../ui/ServicesSlider";
import SectionTitle from "../ui/SectionTitle";
// Images
import Service1 from "..//../assets/service1.avif";
// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <section className="flex flex-col items-center bg-white px-4 py-5 max-sm:px-2">
      <SectionTitle text="Our Services" />
      <ServicesSlider />
      <div className="mt-5 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <img src={Service1} alt="Servicing" className="h-full object-cover" />
        <div className="max-sm:text-center">
          <h3 className="text-3xl font-bold">
            10 Years Of Experience In Auto Servicing
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            beatae delectus quo nihil tenetur reprehenderit, non eius nulla
            incidunt quaerat tempora ut laudantium explicabo eum soluta, impedit
            veniam vero. Perspiciatis?
          </p>
          <div className="mt-5 space-y-3">
            <span className="flex items-center gap-x-2 text-lg">
              <FaRegCheckCircle className="size-7 text-secondary" />
              Engine Repair
            </span>
            <span className="flex items-center gap-x-2 text-lg">
              <FaRegCheckCircle className="size-7 text-secondary" />
              Brake Repair
            </span>
            <span className="flex items-center gap-x-2 text-lg">
              <FaRegCheckCircle className="size-7 text-secondary" />
              Transmission Repair
            </span>
            <span className="flex items-center gap-x-2 text-lg">
              <FaRegCheckCircle className="size-7 text-secondary" />
              Suspension & Steering Repair
            </span>
          </div>
          <button className="text-light mt-3 flex w-fit items-center gap-x-2 rounded-sm border border-primary bg-primary px-5 py-2 font-medium transition hover:bg-transparent hover:text-primary">
            READ MORE
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
