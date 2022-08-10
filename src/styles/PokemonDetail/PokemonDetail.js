import styled from 'styled-components';

export const PokemonDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 35px 0 150px 0;
  width: 95%;
  height: 550px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border-radius: 10px;
  background-color: #fff;
  overflow: scroll;
  /* position: fixed; */
  
  & > .pokemon-details{
    height: 70%;
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    align-items: center;
    padding: 35px 15px 5px 15px;
    
    & > .pokemon-details__name{
      font-size: 2rem;
      width: 100%;
      height: 50px;
      font-weight: bold;
      color: #000;
      text-align: center;
      /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
      border-radius: 10px;
    }

    & > .pokemon-item__types{
    width: 100%;
    height: 45px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    }

    & > .pokemon-details__height{
      font-size: 1.5rem;
      width: 80%;
      height: 40px;
      font-weight: bold;
      color: #000;
      text-align: center;
      /* box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px; */
      border-radius: 10px;
    }

    & > .pokemon-details__stats{
      display: grid;
      grid-template-columns: repeat(3, 1fr);  
      width: 100%;  

      & > .pokemon-details__stats--container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 5px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        & > .pokemon-details__stats--name{
          font-size: 1rem;
          text-align: center;
        }
        & > .pokemon-details__stats--value{
          font-size: 2rem;
          text-align: center;
        }
      }

    }
  } 

  & > .pokemon-details__image-container{
    /* width: 100%; */
    max-width: 550px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 15%;

    @media (min-width: 400px) {
      left: 22%;
    }

    @media (min-width: 570px) {
      left: 30%;
    }

    @media (min-width: 675px) {
      left: 40%
    }

    @media (min-width: 1024px) {
      left: 40%;
    }

    & > .pokemon-details__image{
      width: 228px;
      right: 30px;
    }
  }

  & > .pokemon-details__back{
    position: absolute;
    width: 30px;
    top: 15px;
    left: 10px;
    cursor: pointer;
  }

  & > .pokemon-item__add-remove{
    position: absolute;
    width: 50px;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  @media(min-width: 458px){
    max-height: 535px;
  }

  @media (min-width: 600px) {
    max-width: 550px;
    min-height: 535px;
    margin: 50px 0 130px 0;
    overflow: scroll;
  }

  `
export const PokemonDetailHeader = styled.div`
  height: 30%;
  width: 100%;
  border-radius: 0 0 140px 140px;
  background: ${props => props.gradient};
  
`