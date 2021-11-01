import {DefaultTheme} from 'styled-components';
import * as Colors from '../colors';

export const themeLight: DefaultTheme = {
  colors: {
    primary: {
      main: Colors.brand05,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.brand01,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red,
      onMain: Colors.white,
    },
    background: {
      main: Colors.white,
      onMain: Colors.black,
    },
    surface: {
      main: Colors.neutrais,
      onMain: Colors.white,
    },
  },
};
