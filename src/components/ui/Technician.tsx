// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

type TechnicianProps = {
  technician: {
    name: string;
    imgURL: string;
    designation: string;
  };
};

const Technician = ({ technician }: TechnicianProps) => {
  return (
    <div className="group grid w-full max-w-md place-items-center overflow-hidden rounded bg-gray-200 pb-3">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={technician.imgURL}
          alt="Technician image"
        />
        <div className="absolute inset-0 flex scale-0 items-center justify-center gap-x-2 bg-primary transition duration-500 group-hover:scale-100">
          <button className="rounded bg-white p-2 text-dark transition duration-300 hover:bg-dark hover:text-light">
            <FaFacebookF className="size-6" />
          </button>
          <button className="rounded bg-white p-2 text-dark transition duration-300 hover:bg-dark hover:text-light">
            <FaXTwitter className="size-6" />
          </button>
          <button className="rounded bg-white p-2 text-dark transition duration-300 hover:bg-dark hover:text-light">
            <FaInstagram className="size-6" />
          </button>
        </div>
      </div>
      <p className="mt-3 text-xl font-medium">{technician.name}</p>
      <p className="font-light capitalize">{technician.designation}</p>
    </div>
  );
};

export default Technician;
