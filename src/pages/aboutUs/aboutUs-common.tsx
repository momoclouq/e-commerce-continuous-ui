import { Card, CardContent, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

type AboutUsFeatureCardProps = {
  feature: string;
  description: JSX.Element;
}

export const AboutUsFeatureCard = ({ feature, description }: PropsWithChildren<AboutUsFeatureCardProps>) => {
  return (
    <Card sx={{
      minHeight: '200px',
      background: '#ee4d2d',
      color: '#FFF'
    }}>
      <CardContent>
        <Typography variant="h5" component="div">{feature}</Typography>
        <Typography mt={2} variant='body2'>{description}</Typography>
      </CardContent>
    </Card>
  );
};
