import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
// Images
import BgImage from "../../assets/figures.avif";
// Icons
import { FaRegSmile } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { FaCarRear } from "react-icons/fa6";
import AnimatedCounter from "./AnimatedCounter";

const FiguresInfo = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 2 });

    return () => controls.stop();
  }, []);

  return (
    <section
      className="mt-5 bg-cover bg-no-repeat text-light"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="grid h-full w-full grid-cols-3 gap-5 bg-dark bg-opacity-80 p-10 max-sm:grid-cols-1">
        <div className="grid place-items-center gap-y-1">
          <FaRegSmile className="size-10" />
          <AnimatedCounter from={0} to={867} />
          <span>Satisfied Clients</span>
        </div>
        <div className="grid place-items-center gap-y-1">
          <GiAutoRepair className="size-10" />
          <AnimatedCounter from={0} to={456} delay={0.3} />
          <span>Expert Technician</span>
        </div>
        <div className="grid place-items-center gap-y-1">
          <FaCarRear className="size-10" />
          <AnimatedCounter from={0} to={1146} delay={0.6} />
          <span>Complete Projects</span>
        </div>
      </div>
    </section>
  );
};

export default FiguresInfo;
