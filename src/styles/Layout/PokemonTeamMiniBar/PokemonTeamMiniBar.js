import styled from 'styled-components';

export const PokemonTeamMiniBarContainer = styled.div`
  width: 90%;
  max-width: 325px;
  height: 50px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #2c2c2c;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: fixed;
  bottom: 95px; 
  z-index: 2;
  border: 1px solid #fff;
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 850px) {
    width: 50px;
    height: 325px;
    bottom: 30%;
    left: 5px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    display: none;
  }
  `

export const PokemonTeamSprite = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #2c2c2c;
  background: ${props => props.gradient};
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 90%;
    height: 90%;
  }
  
  & > .pokeball{
    width: 100%;
    height: 100%;
  }
`