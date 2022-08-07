import { POKEMON_TYPE_COLOR } from '@customTypes/pokemonCustomTypes';
import styled from 'styled-components';

export const ConfirmMessageStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 145px;
  border-radius: 10px;
  background-color: #2b2e2e;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1.5px solid #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  & > .message{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 1rem;

    & > .message__icon-image{
    /* width: 20%; */
    height: 50px;
    }

    & > .message__text{
      width: 70%;
      height: 75px;
    }
  
    & > .message__pokemon-sprite{
      width: 50px;
      height: 50px;
    }
  }

  & > .buttons{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    & > .button{
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #fff;
    }
    & > .confirm{
      background-color: ${POKEMON_TYPE_COLOR.grass};
    }
    & > .cancel{
      background-color: ${POKEMON_TYPE_COLOR.fire};
    }
  }




`