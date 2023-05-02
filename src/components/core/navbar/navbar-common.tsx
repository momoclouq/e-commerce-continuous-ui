import { Link } from '@mui/material';
import { PropsWithChildren } from 'react';

export const NavLink = ({ href, padding, children }: PropsWithChildren<{ href: string; padding?: boolean; }>) => {
  return (
    <Link
      variant='body2' 
      href={href}
      underline='none'
      color='#FFFFFF'
      sx={{
        padding: padding ? '0.1em 0.4em' : '0'
      }}
    >
      {children}
    </Link>
  )
}
