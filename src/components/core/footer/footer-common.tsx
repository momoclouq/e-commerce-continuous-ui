import { Box, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import { PropsWithChildren } from 'react';

export const FooterItemSpacer = () => {
  return (
    <Box sx={{
      margin: '0 1.5em'
    }}>
      <Typography variant='subtitle2'>|</Typography>
    </Box>
  )
}

export const FooterLink = ({ href, children }: PropsWithChildren<{ href: string; }>) => {
  return (
    <Link 
      href={href}
      variant='body1'
      underline='none'
      color={grey['600']} 
    >
      {children}
    </Link>
  )
}

export const FooterRow = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1em 0'
    }}>
      {children}
    </Box>
  )
}

export const FooterIconWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{
      margin: '0 0.5em'
    }}>
      {children}
    </Box>
  )
}