import styled from 'styled-components';

export const Pokeball = styled.img`
  position: absolute;
  z-index: 5;
  ${(props) => props.side === "top" ? "top: 35px" : "bottom: 35px"};
  width: 125px;
  animation: rotation 0.3s linear;

  @keyframes rotation {
      from{
        transform: rotate(0deg);
      }
      from {
        transform: rotate(360deg);
      }
    }
`