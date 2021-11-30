import React from 'react';
import {Props} from './types';
import {Container} from './styles';

const Text = ({children, color, typography, ...rest}: Props) => {
  return (
    <Container color={color || 'primary'}
      typography={typography || 'body1'}
      {...rest}>
      {children}
    </Container>
  );
};

export default Text;
