import { AppBar } from '@mui/material';
import MediaNavbar from './MediaNavbar';
import CoreNavbar from './CoreNavbar';

const Navbar = () => {
  return (
    <AppBar position='static' sx={{
      background: '#ee4d2d'
    }}>
      <MediaNavbar />
      <CoreNavbar />
    </AppBar>
  );
}

export default Navbar;