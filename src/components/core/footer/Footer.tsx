import { Container } from '@mui/material';
import { FooterIconWrapper, FooterItemSpacer, FooterLink, FooterRow } from './footer-common';
import { grey } from '@mui/material/colors';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Container sx={{ background: grey[100] }} maxWidth={false}>
      <Container maxWidth='md'>
        <FooterRow>
          <FooterLink href='policies/privacy'>PRIVACY POLICY</FooterLink>
          <FooterItemSpacer />
          <FooterLink href='policies/term-of-service'>TERM OF SERVICE</FooterLink>
          <FooterItemSpacer />
          <FooterLink href='policies/shipping'>SHIPPING POLICY</FooterLink>
          <FooterItemSpacer />
          <FooterLink href='policies/violation'>VIOLATION</FooterLink>
          <FooterItemSpacer />
        </FooterRow>
        <FooterRow>
          <FooterIconWrapper><Facebook /></FooterIconWrapper>
          <FooterIconWrapper><Twitter /></FooterIconWrapper>
          <FooterIconWrapper><Instagram /></FooterIconWrapper>
        </FooterRow>
      </Container>
    </Container>
  );
};

export default Footer;