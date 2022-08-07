import styled from 'styled-components'

export const TeamContainer = styled.section`
  padding: 25px 10px 0 10px; 
  width: 100%;
  max-width: 850px;
  display: ${props => props.showDetails ? 'none' : 'grid'};
  grid-template-columns: 30% 70%;
  grid-template-rows: 80px 1fr;
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

  @media (min-width: 590px) {
    max-width: 570px;
  }

  @media (min-width: 1024px) {
    display: grid;
    position: fixed;
    max-width: 30vw;
    right: 0px;
    background: #f4fafc;
    margin-top: 0;
    height: 100%;
    padding: 10px;
    grid-gap: 5px;
    z-index: 5;
    grid-template-rows: 100px 1fr;
    animation: movetoPlace 1s ease-in-out;

    @keyframes movetoPlace {
      from {
        right: -500px;
      } 
      to {
        right: 0;
      }
    }
  }
  `

export const PokemonTeamTitlesStyled = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  & > h1 {
    text-align: center;
    font-size: 1.4rem;
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
  margin: 0 auto;
  justify-self: center;
  
  @media (min-width: 768px) {
    padding: 25px;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    height: 100%;
    grid-gap: 0px;
    padding: 0 25px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    border-radius: 10px;
  }

`

export const EmptyTeam = styled.div`
  grid-area: pokemon;
  display: flex;
  padding: 10px;
  align-items: center;
  
  & > h2{
    font-size: 1.2rem;
    text-align: center;
    width: 80%;
    background: #f4fafc;
    border-radius: 10px;
  }

  & > img{
    width: 100px;
  }

`

