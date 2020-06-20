import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 10px;
  margin: 1rem;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  text-align: center;
  background-color: ${(props) => props.theme.colors.backgroundCard};
  border-radius: 3px;

  .data {
    font-size: 80%;
  }

  .title {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    background-color: ${(props) => props.theme.colors.backgroundImage};
    border-radius: 3px;
    margin-bottom: 1rem;

    > img {
      transition: all ease 500ms;
    }

    > img:hover {
      transform: scale(1.25);
      opacity: 0.7;
    }
  }
`;
