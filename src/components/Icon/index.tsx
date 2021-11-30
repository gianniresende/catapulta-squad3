import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { Container } from './styles';
import { IconProps } from './types';
import Icons from '../../constants/icons';

const Icon = ({icon, size = 20, activeColor, style}: Omit<IconProps, 'source'>) => {
  
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

