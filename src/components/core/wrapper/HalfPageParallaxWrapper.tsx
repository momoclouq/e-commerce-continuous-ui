import { Box } from '@mui/material';
import { useRef, useState, useEffect, PropsWithChildren } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxEffect, generateParallaxEffects } from '../../../utils/parallax-react';



type HalfPageParallaxWrapperProps = {
  windowHeight: number;
  containerStyle?: object;
  effects: ParallaxEffect[];
};

const HalfPageParallaxWrapper = ({
  children, 
  windowHeight, 
  containerStyle,
  effects
}: PropsWithChildren<HalfPageParallaxWrapperProps>) => {
  const currentRef = useRef(null);
  const [currentScroll, setCurrentScroll] = useState({
    startScroll: 0,
    endScroll: 0
  });

  useEffect(() => {
    if (currentRef?.current) {
      const { top } = (currentRef.current as any).getBoundingClientRect();
      const startScroll = top + window.scrollY - windowHeight;
      const endScroll = top + window.scrollY - windowHeight / 2;
      const calculatedStartScroll = startScroll > 0 ? startScroll : 0;
      let calculatedEndScroll = endScroll > 0 ? endScroll : 0;

      const documentHeight = document.documentElement.getBoundingClientRect().height;
      const maximumScrollableHeight = documentHeight - windowHeight;
      if (endScroll > 0 && endScroll > maximumScrollableHeight) calculatedEndScroll = maximumScrollableHeight;

      setCurrentScroll({
        startScroll: calculatedStartScroll,
        endScroll: calculatedEndScroll
      });
    }
  }, [windowHeight, currentRef?.current]);

  return (
    <Parallax {...generateParallaxEffects(effects)} shouldAlwaysCompleteAnimation={true} startScroll={currentScroll.startScroll} endScroll={currentScroll.endScroll}>
      <Box sx={containerStyle} ref={currentRef}>
        {children}
      </Box>
    </Parallax>
  );
}

export default HalfPageParallaxWrapper;