import React, { FC } from 'react';
import { pageTransition, transition } from 'animation';
import { motion } from 'framer-motion';

const MotionAnimation: FC = ({ children }) => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" transition={transition} variants={pageTransition}>
      {children}
    </motion.div>
  );
};

export { MotionAnimation };
