export const slideNav = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const itemNav = {
  initial: {
    x: "80px",
  },

  enter: (i: any) => ({
    x: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
  }),

  exit: (i: any) => ({
    x: "80px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
  }),
};
