import React from 'react';
import { Text, View } from 'react-native';
import {ThemeProvider} from 'styled-components';
import Icon from './components/Icon';
import useAppearance from '~/hooks/useAppearence';
import {Container} from './style';
import Separator from '~/components/Separator';

const App: React.FC = () => {
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            }}>
          <Icon icon="logo" size={150}></Icon>
        </View>
      </Container>
    </ThemeProvider>
  );
};
export default App;
