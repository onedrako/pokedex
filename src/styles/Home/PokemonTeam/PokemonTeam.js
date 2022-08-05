import styled from 'styled-components'

export const TeamContainer = styled.section`
  margin-top: 100px;
  padding: 25px 10px 0 10px; 
  width: 100%;
  max-width: 850px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: 
    "pokeball title" 
    "pokemon pokemon";
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 0 0 10px 10px;


  & > img{
    width: 75px;
    margin: 0 auto;
  }

  & > .pokemon-team-empty{
    grid-area: pokemon;
    font-size: 1.2rem;
    padding: 10px;
    text-align: center;
  }

  @media (min-width: 590px) {
    max-width: 570px;
  }

  @media (min-width: 1024px) {
    position: fixed;
    max-width: 30vw;
    right: 0;
    background: #f4fafc;
    margin-top: 0;
    height: 100%;

  }
  `

export const PokemonTeamTitlesStyled = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1 {
    text-align: center;
    font-size: 2rem;
  }
`

export const PokemonChosenStyled = styled.div`
  grid-area: pokemon;
  width: 100%;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr)); 
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  justify-self: center;

  @media (min-width: 768px) {
    padding: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }

`
