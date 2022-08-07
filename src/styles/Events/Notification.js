import styled from 'styled-components';

export const NotificationStyled = styled.div`
    width: 800px;
    height: 200px;
    overflow-x: hidden;
    overflow-y: hidden;

    @media (max-width: 735px) {
      height: 150px;
    }
`


export const PlatformContainer = styled.div`
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

  @media (max-width: 735px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 615px) {
    width: 125px;
    height: 125px;
  }

  & > .platform__container--logo {
        display: flex;
        height: 200px;
        width: 200px;
        justify-content: center;
        align-items: center;
        background: #2b2e2e;
        border: ridge 10px #fff;
        border-radius: 50%;
        position: relative;
        z-index: 3;
        animation-name: rotateAndGetBack;
        animation-duration: 7s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        animation-delay: 0.3s;

        @media (max-width: 735px) {
          width: 150px;
          height: 150px;
        }

        @media (max-width: 615px) {
          width: 125px;
          height: 125px;
        }

        @keyframes rotateAndGetBack {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(360deg);
          }
          85% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
    
          & > .logo {
          height: 100px;
            }
          & > .logo--bigger {
              height: 150px;
            }
          & > .logo--option2 {
              height: 135px;

              @media (max-width: 735px) {
                width: 75px;
                height: 75px;
              }
              
          }
      }
` 

export const Banner = styled.div`
  display: flex;
  opacity: 1;
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
  animation-delay: 0.3s;

  @media (max-width: 735px) {
    width: 525px;
    height: 100px;
    top: 12%;
  }

  @media (max-width: 615px) {
    width: 80%;
    height: 97px;    
  }

  @media (max-width: 470px) {
    width: 75%;
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

          @media (max-width: 615px) {
            font-size: .8rem;
          }

          @media (max-width: 470px) {
            font-size: .7rem;
          }

          @media (max-width: 440px) {
            h2{
              /* font-size: rem; */
              height: 50px;
              width: 233px;
            }
          }

          @media (max-width: 400px) {
            h2{
              width: 170px;
            }
          }
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

          @media (max-width: 615px) {
            font-size: .8rem;
            padding-right: 5px;
          }

          @media (max-width: 470px) {
            h3{
              width: 233px;
              height: 40px;
              font-size: .8rem;
            }
          }

          @media (max-width: 400px) {
            h3{
              width: 100%;
              height: 45px;
              font-size: .65rem;
            }
          }
        }
    }
`