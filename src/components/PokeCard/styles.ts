import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;
  padding-top: 150%;
  transform-origin: top left;
  transform: skewY(4.398705355deg) rotatez(14.03624deg);
  transition-property: z-index;
  transition-duration: 0.3s;
  z-index: 1;

  &:hover {
    transform: skewY(0deg) rotatez(14.03624deg);
    z-index: 4;
  }

  &:hover h2 {
    left: -6%;
    top: 64%;
    width: 115%;
  }

  &:hover .details {
    transform: rotate(-14.23624deg) translate(5.5%, 15%) scale(1.4);
  }

  &:hover img:nth-child(2n) {
    width: 60%;
    transform: translateX(0) translateY(38%) rotatez(135deg);
  }

  &:hover img:nth-child(2n + 1) {
    width: 100%;
    transform: translateX(-65%) translateY(-75%) rotatez(-45deg);
  }

  .details {
    position: absolute;
    z-index: 2;
    width: 98%;
    height: 95%;
    top: 0;
    background-color: #dadddf;
    border-radius: 2vw;
    box-shadow: inset 0px 0px 0px 7vw #fcf8f4;
    box-sizing: border-box;
    filter: drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4));
    transform: rotate(0deg) translate(0, 0);
    transition-property: transform;
    transition-duration: 0.3s;

    @media (min-width: 300px) {
      box-shadow: inset 0px 0px 0px 4vw #fcf8f4;
    }

    @media (min-width: 600px) {
      box-shadow: inset 0px 0px 0px 2.8vw #fcf8f4;
    }

    @media (min-width: 900px) {
      box-shadow: inset 0px 0px 0px 2.2vw #fcf8f4;
    }

    @media (min-width: 1200px) {
      box-shadow: inset 0px 0px 0px 1.8vw #fcf8f4;
    }

    @media (min-width: 1500px) {
      box-shadow: inset 0px 0px 0px 1.5vw #fcf8f4;
    }
  }

  h2,
  p,
  img {
    position: absolute;
    z-index: 4;
  }

  p {
    background-color: #fcf8f4;
    color: #4d4d4d;
    font-size: 1.4em;
    padding: 2% 2.5% 2% 2.5%;
  }

  p:nth-child(2n) {
    top: 3%;
    right: 5%;
  }

  p:nth-child(2n + 1) {
    bottom: 3%;
    left: 5%;
    transform: rotatez(180deg);
  }

  h2 {
    background-color: #fcf8f4;
    color: #4d4d4d;
    font-size: 20px;
    left: -10%;
    line-height: 115%;
    text-align: center;
    transform: rotatez(-42deg);
    transition-duration: 0.3s;
    transition-property: top;
    top: 46%;
    width: 120%;
  }

  img {
    width: 84%;
    top: 50%;
    left: 50%;
  }

  img:nth-child(2n) {
    transform: translateX(-30%) translateY(5%) rotatez(135deg);
    transition-property: width, transform;
    transition-duration: 0.3s;
  }

  img:nth-child(2n + 1) {
    transform: translateX(-70%) translateY(-105%) rotatez(-45deg);
    transition-property: width, transform;
    transition-duration: 0.3s;
  }
`;
