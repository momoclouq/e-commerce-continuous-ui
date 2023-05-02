import { Container } from '@mui/material';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const MainPageStructure = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Navbar />

      <Outlet />
			
      <Footer />
    </Container>
  );
};

export default MainPageStructure;