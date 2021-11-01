import React from 'react';
import {ThemeProvider} from 'styled-components';
import Header from './components/Header';
import useAppearance from './hooks/useAppearence';
import {Container} from './style';

const App: React.FC = () => {
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};
export default App;
