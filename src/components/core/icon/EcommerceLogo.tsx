import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box, Typography } from '@mui/material';

const EcommerceLogo = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.75em',
      height: '100%',
      padding: '0 0.5em'
    }}>
      <LocalMallIcon fontSize='inherit' />
      <Typography variant='inherit'>ContiShop</Typography>
    </Box>
  )
}

export default EcommerceLogo;