import styled from 'styled-components';

export const TopPokedexStyled = styled.header`
  background: #c11427;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 4;
  border-bottom: 4px solid #fff;
  align-items: flex-end;
  height: ${(props) => props.initial ? "50%" : "100px"};
  animation: ${(props) => props.initial ? "showFromTop" : props.trigger ? "newPage" : "none"} ease-in-out;
  animation-duration: ${(props) => props.initial === true ? "0.5s" : "0.6s"};
  animation-fill-mode: forwards;  
  animation-delay: ${(props) => props.initial === true ? "0.5s" : "0s" };

  @keyframes newPage {
    0% {
      height: 100px;
    }
    50% {
      height: 50%;
    }
    100% {
      height: 100px;
    }
  }

  
  @keyframes showFromTop {
    from {
      height: 50%;
    }
    to {
      height: 100px; 
    }
  }

  
  @media (min-width: 1024px) {
    max-width: 70%;
    left: 0;
  }

  @media (min-width: 400px) {
    & > .speaker-background{
    /* background: #fff; */
    width: 55px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 5;
    left: 10%;
    bottom: 30px;

    & > .speaker{
      background: #fff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      & > .speaker-light{
        background: #2ea7f6;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }}

  & > .container{
    width: 320px;
    height: 96px;
    background: inherit;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;

    & > .background-circle{
      background: #fff;
      width: 50%;
      height: 158px;
      border-radius: 50%;
      position: absolute;
      top: 17%;
    }

    & > .circle{
      /* background: #fff; */
      width: 47%;
      height: 150px;
      border-radius: 50%;
      position: absolute;
      top: 22%;
      z-index: 2;
      border: 25px solid #2b2e2e;
    }
  }
`
