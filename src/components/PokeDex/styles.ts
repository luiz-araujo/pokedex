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
    color: #4caf50;
    margin-top: 25px;
  }

  .loser {
    color: #e91e63;
    margin-top: 25px;
  }

  .total-exp {
    margin-bottom: 25px;
  }
`;
