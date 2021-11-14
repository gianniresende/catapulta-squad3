import 'styled-components';

declare module 'styled-components' {
  export interface Spacing {
    ty: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  }

  export interface Mask {
    phone: string;
    taxPayer: string;
    zipCode: string;
  }
  export type MaskType = 'phone' | 'taxPayer' | 'zipCode';

  export interface Border {
    radius: {
      xs: number;
      sm: number;
    };
  }

  export interface ColorType {
    main: string;
    onMain: string;
  }

  export type ColorsType =
    | 'primary'
    | 'secondary'
    | 'background'
    | 'error'
    | 'surface';

  export interface PaletteType {
    primary: ColorType;
    secondary: ColorType;
    background: ColorType;
    error: ColorType;
    surface: ColorType;
  }

  export interface TypographyProps {
    fontfamily: string;
    fontSize: number;
  }
  export interface Typography {
    h1: TypographyProps;
    h2: TypographyProps;
    h3: TypographyProps;
    h4: TypographyProps;
    h5: TypographyProps;
    h6: TypographyProps;
    subtitle1: TypographyProps;
    subtitle2: TypographyProps;
    body1: TypographyProps;
    body2: TypographyProps;
    body3: TypographyProps;
    caption: TypographyProps;
    overline: TypographyProps;
  }

  export type TypographyType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'overline';

  export interface DefaultTheme {
    colors: PaletteType;
    typography: Typography;
    spacing: Spacing;
    borders: Border;
  }
}
