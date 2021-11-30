import React from 'react';
import {View } from 'react-native';
import {ThemeProvider} from 'styled-components';
import Icon from './components/Icon';
import useAppearance from '~/hooks/useAppearence';
import {Container} from './style';
import Separator from '~/components/Separator';
import Text from './components/Text';

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
        <Text style={{fontSize: 50}}>Text</Text>
      </Container>
    </ThemeProvider>
  );
};
export default App;
