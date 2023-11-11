export const leftAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
  
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  
  export const rigthAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
  
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  export const topAnimation = {
    hidden: {
      y: -200,
      opacity: 0,
    },
  
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  
  export const bottomAnimation = {
    hidden: {
      y: 200,
      opacity: 0,
    },
  
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };