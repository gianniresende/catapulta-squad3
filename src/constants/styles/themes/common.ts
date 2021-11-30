/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
// eslint-disable-next-line prettier/prettier
import {Border, Spacing, Typography} from "styled-components";
// eslint-disable-next-line prettier/prettier
import {Fonts} from "../fonts";

export const typographyCommon: Typography = {
  h1: {
    fontSize: 96,
    fontfamily: Fonts.openSansLight,
  },
  h2: {
    fontSize: 60,
    fontfamily: Fonts.openSansLight,
  },
  h3: {
    fontSize: 48,
    fontfamily: Fonts.openSansRegular,
  },
  h4: {
    fontSize: 32,
    fontfamily: Fonts.montserratBold,
  },
  h5: {
    fontSize: 24,
    fontfamily: Fonts.montserratSemiBold,
  },
  h6: {
    fontSize: 20,
    fontfamily: Fonts.montserratRegular,
  },
  subtitle1: {
    fontSize: 16,
    fontfamily: Fonts.openSansLight,
  },
  subtitle2: {
    fontSize: 14,
    fontfamily: Fonts.openSansRegular,
  },
  caption: {
    fontSize: 12,
    fontfamily: Fonts.openSansLight,
  },
  overline: {
    fontSize: 14,
    fontfamily: Fonts.openSansLight,
  },
  body1: {
    fontSize: 14,
    fontfamily: Fonts.openSansRegular,
  },
  body2: {
    fontSize: 16,
    fontfamily: Fonts.openSansBold,
  },
  body3: {
    fontSize: 14,
    fontfamily: Fonts.openSansRegular,
  },
};

export const spacing: Spacing = {
  ty: 4,
  xs: 5,
  sm: 10,
  md: 20,
  lg: 25,
  xl: 30,
  xxl: 40,
  xxxl: 42,
};

export const borders: Border = {
  radius: {
    xs: 4,
    sm: 10,
  },
};
