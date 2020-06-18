import React from 'react';
import PokeGame from './components/PokeGame';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <PokeGame />
    <GlobalStyle />
  </>
);

export default App;
