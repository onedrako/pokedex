import styled from 'styled-components';

export const NotificationContainer = styled.div`
  width: 100%;
  position: fixed;
  top: -50px;
  left: 0;
  z-index: 3;
  animation-name: showfromBottom;
  animation-duration: 8.5s;
  /* animation-delay: 1s; */
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  /* animation-play-state: running; */

  @keyframes showfromBottom {
    0% {
      transform: translateY(-50px);
    }
    5% {
      transform: translateY(150px);
    }
    90% {
      transform: translateY(150px);
    }
    100% {
      transform: translateY(-100px);
    }
  }
`