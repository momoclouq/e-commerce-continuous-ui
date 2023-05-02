import styled from '@emotion/styled';

type ImageParallaxProps = {
  backgroundImage: string;
}

export const ImageParallaxWrapper = styled.div(({ backgroundImage }: ImageParallaxProps) => {
  const style: any = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return style;
});