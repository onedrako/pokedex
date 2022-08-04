import styled from 'styled-components'

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
