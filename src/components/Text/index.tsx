import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Props} from './types';
import {Container} from './styles';

const Text = ({children, color, typography, ...rest}: Props) => {
  return (
    // eslint-disable-next-line prettier/prettier
    <Container color={color || 'primary'}
      typography={typography || 'body1'}
      {...rest}>
      {children}
    </Container>
  );
};

export default Text;
