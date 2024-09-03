export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5 } },
};

export const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 50 },
  },
};
export const slideInRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 50 },
  },
};

export const scaleUp = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 50 },
  },
};