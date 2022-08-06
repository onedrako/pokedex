import styled from 'styled-components';

export const BotPokedexStyled = styled.footer`
  background: #c11427;
  box-shadow: -1px -3px 5px 0px rgba(0,0,0,0.75);
  position: fixed;
  width: 100%;
  height: 100px;
  height: 50%;
  display: flex;
  bottom: 0;
  z-index: 4;
  justify-content: center;
  border-top: 4px solid #fff;
  height: ${(props) => props.initial ? "50%" : "100px"};
  animation: ${(props) => props.initial ? "showFromBottom" : props.trigger ? "newPage" : "none"} ease-in-out;
  animation-duration: ${(props) => props.initial === true ? "0.5s" : "1s"};
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

  @keyframes showFromBottom {
    from {
      height: 50%;
    }
    to {
      height: 100px; 
    }
  }

  & > .container{
    width: 320px;
    height: 96px;
    background: inherit;
    display: flex;
    justify-content: center;
    position: sticky;

    & > .background-circle{
      background: #fff;
      width: 50%;
      height: 158px;
      border-radius: 50%;
      position: absolute;
      bottom: 17%;
    }

    & > .circle{
      /* background: #fff; */
      width: 47%;
      height: 150px;
      border-radius: 50%;
      position: absolute;
      bottom: 22%;
      z-index: 2;
      border: 25px solid #2b2e2e;
    }
  }

  @media (min-width: 500px) {
    & > .light-container{
      /* background: #fff; */
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      z-index: 5;
      top: 35px;
      right: 5%;
      padding: 10px;
  
      & > .light{
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #2b2e2e;
        display: flex;
        justify-content: center;
        align-items: center;
        
        & > .light-red{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c11427;
        }
  
        & > .light-yellow{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e3dd39;
        }
  
        & > .light-green{
          width: 20px;
          height: 20px; 
          border-radius: 50%;
          background: #51cb33;
        }
      }
  }

  @media (min-width: 1024px) {
    max-width: 70%;
    left: 0;
  }

  }
`