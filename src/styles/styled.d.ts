import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundCard: string;
      backgroundImage: string;
      text: string;

      winner: string;
      loser: string;

      barColor: string;
    };
  }
}
