/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
// eslint-disable-next-line prettier/prettier
import { ThemeContext } from 'styled-components/native';
// eslint-disable-next-line prettier/prettier
import { Container } from './styles';
import { IconProps } from './types';
import Icons from '../../constants/icons';

const Icon = ({icon, size = 20, activeColor, style}: Omit<IconProps, 'source'>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {colors} = useContext(ThemeContext);

  if (activeColor) {
    return (
      <Container
        size={size}
        source={Icons[icon]}
        style={[{tintColor: activeColor}, style]}
      />
    );
  }
  return <Container size={size} source={Icons[icon]} style={style} />;
};

export default Icon;

