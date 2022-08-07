import styled from 'styled-components'

export const PokemonMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 125px;
  border-radius: 10px;
  border: 1px solid #000;
  background: ${props => props.gradient};
  position: relative;
    cursor: pointer;
  

  & > .pokemon-member__image{
    width: 100px;
    height: 100px;
  }

  & > .pokemon-member__name{
    width: 100%;
    height: 30px;
    border-radius: 0 0 5px 5px;
    color: #000;
    background: #fff;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
  }

  & > .pokemon-item__add-remove{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
    cursor: pointer;
  }  

  & > .pokemon-member__hp{
    display: none;

    & > .pokemon-member__hp--name{

    }

    & > .pokemon-member__hp--stat{
      
    }

  }

  @media (min-width: 1024px) {
    height: 100px;
    min-width: 250px;
    margin-top: 10px;
    margin: 10px auto 0 auto; 

    & > .pokemon-member__image{
      width: 75px;
      height: 75px;
      margin-right: 130px;
    }

    & > .pokemon-member__hp{
    position: absolute;
    top: 10px;
    right: 70px;
    width: 65px;
    height: 30px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    padding: 2px;

    & > .pokemon-member__hp--name{
      width: 50%;
      height: 100%;
      text-align: center;
      font-size: 1.1rem;
      color: #000;
      vertical-align: middle;
    }

    & > .pokemon-member__hp--stat{
      width: 50%;
      height: 100%;
      text-align: center;
      font-size: 1.1rem;
      color: #000;
      font-weight: bold;
      vertical-align: middle;
    }
  }
`
