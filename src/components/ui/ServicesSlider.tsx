import { FaOilCan } from "react-icons/fa";

const ServicesSlider = () => {
  return (
    <div className="mt-5 text-xl font-medium">
      <div className="text-light flex w-64 items-center justify-center gap-x-2 bg-primary py-2">
        <FaOilCan className="size-7" />
        <span>Oil Changing</span>
      </div>
    </div>
  );
};

export default ServicesSlider;
