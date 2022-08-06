import styled from 'styled-components';

export const NotificationStyled = styled.div`
    width: 800px;
    height: 200px;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    position: fixed;
    top: -100px;
    z-index: 3;
    left: 0;
    animation-name: showFromTop;
    animation-duration: 9s;
  
  &  > .platform__container {
      display: flex;
      position: absolute;
      left: 0px;
      height: 200px;
      width: 200px;
      background: transparent;
      overflow-y: hidden;
      z-index: 1;
      background: #fff;
      border-radius: 0 50% 50% 0;

      & > .platform__container--logo {
      display: flex;
      height: 200px;
      min-width: 200px;
      justify-content: center;
      align-items: center;
      background: #2b2e2e;;
      border: ridge 10px #fff;
      border-radius: 50%;
      animation-name: rotation;
      animation-duration: 7s;
      animation-delay: 1s;
      z-index: 3;
      position: relative;
      
        & > .logo {
        height: 100px;
          }
        & > .logo--bigger {
            height: 150px;
          }
        & > .logo--option2 {
            height: 135px;
        }
      }
    }
  
  & >.banner {
      display: flex;
      opacity: 0;
      flex-direction: row;
      width: 600px;
      height: 125px;
      position: absolute;
      top: 36px;
      background: #2b2e2e;
      box-shadow: rgba(193, 20, 39, 0.4) 5px 5px, rgba(193, 20, 39, 0.3) 10px 10px, rgba(193, 20, 39, 0.2) 15px 15px, rgba(193, 20, 39, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
      border-top: solid #c11427 5px;
      justify-content: end;
      /* padding: 10px; */
      left: -510px;
      /* left: 75px; */
      animation-name: extend;
      animation-duration: 7s;
      animation-delay: 1s;

      & > .banner__info {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 515px;

      & > .banner__info--info-description {
        display: flex;
        justify-content: flex-end;
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 2;
        color: #fff;
        text-align: center;
        font-size: 1.1rem;
        padding-right: 15px;
      }

      & > .banner__info--name-description {
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 2;
        grid-row-end: 3;
        color: #fff;
        text-align: center;
        font-size: .9rem;
        padding-left: 60px;
      }
      }
    }

    @keyframes rotation {
      15% {
        transform: rotate(360deg);
      }
      85% {
        transform: rotate(360deg);
      }
      100% {
        transform: static;
      }
    }
    @keyframes extend {
      15% {
        left: 75px;
        opacity: 1;
      }
      85% {
        left: 75px;
      }
      100% {
        left: -510px;
        opacity: 1;
      }
    }
    @keyframes showFromTop{
      0% {
        top: -100px;
      }
      5% {
        top: 120px;
      }
      90% {
        top: 120px;
      }
      100% {
        top: -100px;
      }
`