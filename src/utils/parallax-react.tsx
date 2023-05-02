export const parallaxEffects = {
  opacity: [0.4, 1],
  translateX: ['-30vw', '0vw'],
  translateY: ['-5vh', '0vh'],
  rotate: ['30deg', '60deg'],
  rotateX: ['30deg', '60deg'],
  rotateY: ['180deg', '0deg'],
  rotateZ: ['30deg', '60deg'],
  scale: [1, 1],
  scaleX: [1, 1],
  scaleY: [1, 1],
  scaleZ: [1, 1],
}

export type ParallaxEffect = 
  | 'opacity'
  | 'translateX'
  | 'translateY'
  | 'rotate'
  | 'rotateX'
  | 'rotateY'
  | 'rotateZ'
  | 'scale'
  | 'scaleX'
  | 'scaleY'
  | 'scaleZ'
;

export const generateParallaxEffects = (effects: ParallaxEffect[]) => {
  const outputEffects: any = {};
  
  effects.forEach((effect) => {
    if (!parallaxEffects[effect]) throw new Error('Parallax effect is not defined');
    outputEffects[effect] = parallaxEffects[effect]; 
  });

  return outputEffects;
}