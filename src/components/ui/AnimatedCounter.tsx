import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  delay?: number;
};

const AnimatedCounter = ({ from, to, delay }: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const refEl = useRef(null);
  const inView = useInView(refEl);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, delay: delay });
    }
  }, [inView, count, to]);

  return (
    <motion.div ref={refEl} className="text-3xl font-medium">
      {rounded}
    </motion.div>
  );
};

export default AnimatedCounter;
