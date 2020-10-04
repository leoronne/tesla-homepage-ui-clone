/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { useContext, useEffect } from 'react';
import { MotionValue, useMotionValue } from 'framer-motion';

import ModelsContext from './ModelsContext';

const useWrapperScroll = (): {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
} => {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    if (wrapperRef.current) {
      const updateScrollValue = () => {
        if (wrapperRef.current) {
          const { scrollTop, scrollHeight, offsetHeight } = wrapperRef.current;

          const fullScroll = scrollHeight - offsetHeight;

          scrollY.set(scrollTop);
          scrollYProgress.set(scrollTop / fullScroll);
        }
      };
      wrapperRef.current.addEventListener('scroll', updateScrollValue);

      return () => wrapperRef?.current?.removeEventListener('scroll', updateScrollValue);
    }
  }, [wrapperRef, scrollY, scrollYProgress]);

  return { scrollY, scrollYProgress };
};

export default useWrapperScroll;
