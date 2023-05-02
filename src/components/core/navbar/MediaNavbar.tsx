import { Container, Typography } from '@mui/material';
import { NavLink } from './navbar-common';

const MediaNavbar = () => {
  return (
    <Container
      disableGutters={true} 
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        background: 'inherit',
        alignItems: 'center'
      }}>
      <NavLink padding={true} href='about-us'>About us</NavLink>
      <NavLink padding={true} href='login'>Login</NavLink>
      <Typography variant='subtitle2'>|</Typography>
      <NavLink padding={true} href='signup'>Register</NavLink>
    </Container>
  );
}

export default MediaNavbar;