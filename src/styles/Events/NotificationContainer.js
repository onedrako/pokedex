import styled from 'styled-components';

export const NotificationContainer = styled.div`
  width: 100%;
  position: fixed;
  top: -50px;
  /* top: 150px; */
  left: 0;
  z-index: 3;
  animation-name: showfromTop;
  animation-duration: 8.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;

  @media (max-width: 735px) {
    /* top: 100px; */
    height: 150px;
  }

  @keyframes showfromTop {
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

export const NotificationFromBottom = styled.div`
  width: 100%;
  position: fixed;
  bottom: -50px;
  left: 0;
  z-index: 3;
  animation-name: ${props => props.animation ? 'hideToBottom' : 'showFromBottom'};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;

  @keyframes showFromBottom {
    0% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(-160px);
    }
  }

  @keyframes hideToBottom {
    0% {
      transform: translateY(-160px);
    }
    100% {
      transform: translateY(50px);
    }
  }

  @media (min-width: 1024px) {
    width: 70%;
  }

`