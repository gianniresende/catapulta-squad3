/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
// eslint-disable-next-line prettier/prettier
import styled from "styled-components/native";
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line prettier/prettier
import {Props} from "./types";

type ContainerProps = Required<Pick<Props, 'color' | 'typography'>>;

export const Container = styled.Text<ContainerProps>`
  color: ${({theme, color}) => {
    return theme.colors[color].main;
  }};
  font-size: ${({theme, typography}) => {
    return theme.typography[typography].fontSize;
  }}px;
  font-family: ${({theme, typography}) => {
    return theme.typography[typography].fontfamily;
  }};
`;
