import cover1 from '../../static/images/aboutus-cover1.jpg';
import cover2 from '../../static/images/aboutus-cover2.jpg';
import { Box, Container, Grid, Typography } from '@mui/material';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HighlightText } from '../../components/core/text/BasicText';
import { ImageParallaxWrapper } from '../../components/core/wrapper/ImageParallaxWrapper';
import HalfPageParallaxWrapper from '../../components/core/wrapper/HalfPageParallaxWrapper';
import { AboutUsFeatureCard } from './aboutUs-common';

const AboutUsPage = () => {
  const { height } = useWindowDimensions();
  
  return (
    <Container maxWidth={false} disableGutters>
      <ImageParallaxWrapper backgroundImage={cover1}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          background: '#ee4d2d',
          padding: '1em',
          borderRadius: '0.5em',
          color: '#FFF',
          boxShadow: 10,
        }}>
          <Typography variant='h2'>ContiShop</Typography>
          <Typography variant='subtitle1'>Shop the way you like</Typography>
        </Box>
      </ImageParallaxWrapper>
      <Box sx={{
        padding: '2em'
      }}>
        <Typography sx={{
          fontWeight: '200'
        }} variant='h4'>ContiShop - the new way to shopping</Typography>
        <HalfPageParallaxWrapper effects={['translateX']} windowHeight={height}>
          <Typography mt={2} variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab dolorem qui quos molestiae eum unde voluptas, assumenda obcaecati necessitatibus quod aliquam est sit blanditiis voluptates ea porro, amet suscipit sapiente pariatur provident a? Eum voluptas aliquam cupiditate pariatur commodi, asperiores corporis nostrum praesentium quidem! Labore quia quidem vero neque.
          </Typography>
        </HalfPageParallaxWrapper>
        <Typography sx={{
          fontWeight: '200'
        }} mt={2} variant='h4'>Buy and sell items online with ease, speed and safety</Typography>
        <HalfPageParallaxWrapper effects={['translateX']} windowHeight={height}>
          <Typography mt={2} variant='body1'>
            If you are looking for a website to buy and sell online then ContiShop is a great choice for you. ContiShop is an ecommerce site allowing buyers and sellers interact with each other and share the information about the products and sales program. Shopping on ContiShop has become easy and fast. You can directly contact the shops to ask about the products you interested in.
          </Typography>
          <Typography mt={2} variant='body1'>
            Come to ContiShop and have a change to become a seller more easily than ever before. With a few clicks on the application, you can now sell your products online. You can also <HighlightText>create the promotions for the products your self</HighlightText> to attract the customers with products of good value. when logged in at ContiShop seller channel,  you can easily categorized your products, track your orders, provide customer service and update your shops activities. 
          </Typography>
        </HalfPageParallaxWrapper>
      </Box>

      <ImageParallaxWrapper backgroundImage={cover2}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          backdropFilter: 'blur(8px)',
          padding: '2em'
        }}>
          <Grid container spacing={4}>
            <Grid sx={{
              display:'flex',
              justifyContent: 'center'
            }} item xs={12}>
              <HalfPageParallaxWrapper effects={['opacity']} windowHeight={height}>
                <Box sx={{
                  textTransform: 'uppercase',
                  padding: '1.5em',
                  background: '#FFF',
                  color: '#ee4d2d',
                  borderRadius: '1em',
                  boxShadow: 10
                }}>
                  <Typography sx={{ fontWeight: '300' }} variant='h3'>Notable Features</Typography>
                </Box>
              </HalfPageParallaxWrapper>
            </Grid>
            <Grid item xs={4}>
              <HalfPageParallaxWrapper windowHeight={height} effects={['translateY', 'opacity']}>
                <AboutUsFeatureCard feature='INTUITIVE' description={<>Interactive UI, easy to use. You can find the notable products as well as finding the search box, cart or instant chat box</>}/>
              </HalfPageParallaxWrapper>
            </Grid>
            <Grid item xs={4}>
              <HalfPageParallaxWrapper windowHeight={height} effects={['translateY', 'opacity']}>
                <AboutUsFeatureCard feature='SYNCHRONIZATION' description={<>The app integrates the technology to manage your orders and current offerings on the same account, you will the buyer and the seller at the same time</>} />
              </HalfPageParallaxWrapper>
            </Grid>
            <Grid item xs={4}>
              <HalfPageParallaxWrapper windowHeight={height} effects={['translateY', 'opacity']}>
                <AboutUsFeatureCard feature='INFORMATION' description={<>up-to-date news about the sales including <HighlightText>ContiShop Flash sale</HighlightText></>} />
              </HalfPageParallaxWrapper>
            </Grid>
          </Grid>
          
        </Box>
      </ImageParallaxWrapper>
    </Container>
  )
}

export default AboutUsPage;