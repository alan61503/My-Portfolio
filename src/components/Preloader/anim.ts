import { cubicBezier } from "framer-motion";

const easing = cubicBezier(0.76, 0, 0.24, 1);

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: easing, delay: 0.2 },
  },
};
