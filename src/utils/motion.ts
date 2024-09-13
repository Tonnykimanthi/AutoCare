export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5 } },
};

export const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export const slideInBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export const scaleUp = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 50 },
  },
};
