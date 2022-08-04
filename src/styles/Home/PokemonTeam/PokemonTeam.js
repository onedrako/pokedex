import styled from 'styled-components'

export const TeamContainer = styled.section`
  margin-top: 100px;
  padding: 25px 10px 25px 10px; 
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 50px fill;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  justify-self: center;
`
