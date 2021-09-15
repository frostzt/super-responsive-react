export const containerVarient = {
  initial: {
    opacity: 0,
    y: -50,
    transition: {
      when: "beforeChildren",
      duration: 1,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const childrenVarient = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
