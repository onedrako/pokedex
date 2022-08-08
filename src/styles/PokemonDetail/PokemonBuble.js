import styled from 'styled-components'

export const PokemonBubleContainer = styled.div`
  display: flex;
  /* width: 115px; */
  /* height: 115px; */

  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: ${props => props.gradient};
  border: 3px solid #2b2e2e;
  position: fixed;
  ${props => props.selector === "previous" ? "left:-15%" : 'right:-15%'};
  top: 40%;

  @media (min-width: 350px) {
    ${props => props.selector === "previous" ? "left:-10%" : 'right:-10%'};
  }

  @media (min-width: 450px) {
    ${props => props.selector === "previous" ? "left:-5%" : 'right:-5%'};
  }

  @media (min-width: 720px) {
    ${props => props.selector === "previous" ? "left:1%" : 'right:1%'};
  }

  @media (min-width: 850px) {
    ${props => props.selector === "previous" ? "left:7%" : 'right: 7%'};
  }
  @media (min-width: 1024px) {
    ${props => props.selector === "previous" ? "left:1%" : 'right: 31%'};
    width: 115px;
    height: 115px;
  }
  @media (min-width: 1280px) {
    ${props => props.selector === "previous" ? "left:1%" : 'right: 31%'};
    width: 150px;
    height: 150px;
  }
`