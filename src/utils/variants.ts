export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "down" ? 40 : direction === "up" ? -40 : 0,
      x: direction === "right" ? 40 : direction === "left" ? -40 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// utils/variants.js

// Parent variant for staggering children
export const staggerParent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      // Time between each child's animation
    },
  },
};

// Child variant for individual animations
export const staggerChild = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5, // Duration for each child's animation
    },
  },
};