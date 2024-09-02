// Components
import ServicesSlider from "../ui/ServicesSlider";
import SectionTitle from "../ui/SectionTitle";
// Images
import Service from "..//../assets/service.avif";
// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import ReadMoreBtn from "../ui/ReadMoreBtn";

const Services = () => {
  return (
    <section className="mt-5 flex flex-col items-center p-5 max-sm:px-2">
      <SectionTitle text="Our Services" />
      <ServicesSlider />
      <div className="mt-5 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <img src={Service} alt="Servicing" className="h-full object-cover" />
        <div className="max-md:text-center">
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
          <ReadMoreBtn styles="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Services;
