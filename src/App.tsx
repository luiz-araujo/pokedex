import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import PokeGame from './components/PokeGame';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@PokeDexTheme',
    light
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <PokeGame toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
