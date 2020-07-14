import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .cards {
    display: grid;
    margin: 0 auto;

    @media (min-width: 300px) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 3vw;
      max-width: 300px;
    }

    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2vw;
      max-width: 600px;
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 1vw;
      max-width: 900px;
    }
  }

  .winner {
    color: ${(props) => props.theme.colors.winner};
    margin-top: 25px;
  }

  .loser {
    color: ${(props) => props.theme.colors.loser};
    margin-top: 25px;
  }

  .total-exp {
    margin-bottom: 25px;
  }
`;
