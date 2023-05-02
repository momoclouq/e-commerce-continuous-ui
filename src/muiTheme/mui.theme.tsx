import { LinkProps, createTheme } from '@mui/material';
import { LinkReactRouterBehavior } from './overridenComponents';

const defaultTheme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkReactRouterBehavior,
      } as LinkProps
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkReactRouterBehavior,
      }
    }
  }
});

export default defaultTheme;