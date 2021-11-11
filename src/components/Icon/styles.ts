import styled from 'styled-components/native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IconProps} from './types';

type ImageProp = Required<Pick<IconProps, 'size'>>;

export const Container = styled.Image<Partial<IconProps>>`
  min-width: ${({size}) => size}px;
  min-height: ${({size}) => size}px;
  max-width: ${({size}) => size}px;
  max-height: ${({size}) => size}px;
`;
