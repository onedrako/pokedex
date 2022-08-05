import styled from 'styled-components';

export const BotPokedexStyled = styled.div`
  background: #c11427;
  box-shadow: -1px -3px 5px 0px rgba(0,0,0,0.75);
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  bottom: 0;
  z-index: 4;
  justify-content: center;
  border-top: 4px solid #fff;

  & > .container{
    width: 320px;
    background: inherit;
    display: flex;
    justify-content: center;
    position: relative;


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
      bottom: 5px;
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

  }
  
`