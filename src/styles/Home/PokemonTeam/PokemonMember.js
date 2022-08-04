import styled from 'styled-components'
import { POKEMON_TYPE_COLOR } from '@customTypes/pokemonCustomTypes'


export const PokemonMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 125px;
  border-radius: 10px;
  border: 1px solid #000;
  background: ${props => props.gradient};
  /* box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */
  position: relative;

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
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
    cursor: pointer;
  }  
`
