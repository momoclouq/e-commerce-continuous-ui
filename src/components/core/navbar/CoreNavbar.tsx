import { ShoppingCart } from '@mui/icons-material';
import { Container, Box, OutlinedInput, InputAdornment } from '@mui/material';
import EcommerceLogo from '../icon/EcommerceLogo';
import { NavLink } from './navbar-common';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

const CoreNavbar = () => {
  return (
    <Container 
      component='nav' 
      disableGutters={true}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'inherit',
      }}
    >
      <Box sx={{
        height: '100%',
        display: 'flex'
      }}>
        <NavLink href='/'>
          <EcommerceLogo />
        </NavLink>
      </Box>
      
      <Box sx={{
        padding: '0.5em 1em 0 0.5em',
        flexGrow: '1',
      }}>
        <Box sx={{
          background: 'white',
          borderRadius: '4px'
        }}>
          <OutlinedInput 
            fullWidth={true} 
            id='navbar-search' 
            placeholder='Register and receive a 10$ voucher'
            size='small'
            color='secondary'
            endAdornment={
              <InputAdornment position='end'>
                <Box sx={{
                  background: '#ee4d2d',
                  borderRadius: '0.5em',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.15em 1em',
                  cursor: 'pointer'
                }}>
                  <SearchIcon 
                    aria-label='start search item'
                    onClick={() => { console.log('search icon clicked') }}
                    htmlColor={grey['A100']}
                  />
                </Box>
              </InputAdornment>
            }
          />
        </Box> 
        <Box sx={{
          display: 'flex',
          marginTop: '0.3em'
        }}>
          <NavLink padding={true} href='/'>iPhone 14 Pro Max</NavLink>
          <NavLink padding={true} href='/'>Macbook pro 14 M2</NavLink>
        </Box>
      </Box>

      <Box
        sx={{
          fontSize: '2em',
          padding: '1em',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ShoppingCart fontSize='inherit' />
      </Box>
    </Container>
  )
}

export default CoreNavbar;