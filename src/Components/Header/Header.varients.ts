export const mainVarient = {
  initial: {
    opacity: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const contentVarient = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const paragraphVarient = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};
