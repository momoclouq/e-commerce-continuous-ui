import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

// react-router Link wrapper
export const LinkReactRouterBehavior = forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'> & { href: LinkProps['to'] }>((props, ref) => {
  const { href, ...other } = props;
  return <Link data-testid="custom-link" ref={ref} to={href} {...other} />;
});

LinkReactRouterBehavior.displayName = 'LinkReactRouterBehavior';