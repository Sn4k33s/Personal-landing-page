export const fadeIn = (duration: number = 0.5) => {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration } },
  };
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', duration: number = 0.5) => {
  const x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
  const y = direction === 'up' ? '100%' : direction === 'down' ? '-100%' : '0';
  
  return {
    hidden: { x, y, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1, transition: { duration } },
  };
};

export const bounce = (duration: number = 0.5) => {
  return {
    hidden: { scale: 0.8 },
    visible: { scale: 1, transition: { duration, type: 'spring', stiffness: 300 } },
  };
};