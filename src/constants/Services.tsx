import { FaOilCan } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { GiFlatTire } from "react-icons/gi";
import { FaCarBattery } from "react-icons/fa";

type Service = {
  Icon: React.ComponentType<{className: string}>;
  title: string;
};

const services: Service[] = [
  {
    Icon: FaOilCan,
    title: "Oil Changing",
  },
  {
    Icon: PiEngineFill,
    title: "Engine Diagnostics",
  },
  {
    Icon: GiAutoRepair,
    title: "Brake Inspection & Replacement",
  },
  {
    Icon: GiFlatTire,
    title: "Tire Rotation & Balancing",
  },
  {
    Icon: FaCarBattery,
    title: "Battery Testing & Replacement",
  },
];

export default services;
