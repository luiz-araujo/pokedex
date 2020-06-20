import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
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
