/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line quotes
import {TextProps} from "react-native";
// eslint-disable-next-line quotes
import {ColorsType, TypographyType} from "styled-components";

export interface Props extends TextProps {
  children: string;
  color?: ColorsType;
  typography?: TypographyType;
}
