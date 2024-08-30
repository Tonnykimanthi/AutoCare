// Images
import BgImage from "../../assets/figures.avif";
// Icons
import { FaRegSmile } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { FaCarRear } from "react-icons/fa6";

const FiguresInfo = () => {
  return (
    <section
      className="text-light bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-dark grid h-full w-full grid-cols-3 gap-5 bg-opacity-80 p-10 max-sm:grid-cols-1">
        <div className="grid place-items-center gap-y-1">
          <FaRegSmile className="size-10" />
          <span className="text-3xl font-medium">2549</span>
          <span>Satisfied Clients</span>
        </div>
        <div className="grid place-items-center gap-y-1">
          <GiAutoRepair className="size-10" />
          <span className="text-3xl font-medium">2549</span>
          <span>Expert Technician</span>
        </div>
        <div className="grid place-items-center gap-y-1">
          <FaCarRear className="size-10" />
          <span className="text-3xl font-medium">2549</span>
          <span>Complete Projects</span>
        </div>
      </div>
    </section>
  );
};

export default FiguresInfo;
