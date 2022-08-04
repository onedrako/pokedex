import styled from 'styled-components'

export const PokemonItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 150px; */
  border-radius: 5px;
  background-color: #88cedb;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  position: relative;
  /* padding: 5px; */
  cursor: pointer;

  & > .pokemon-item__add-remove{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
    cursor: pointer;
  }

  & > .pokemon-item__sprite{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* background-color: #fff; */
    margin: 0 auto 0 5px 
  }

  & > .pokemon-item__name{
    width: 100%;
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 0 0 5px 5px;
    font-weight: bold;
    color: #fff;
    background-color: #2b2e2e;
    text-align: center;
  }

  & > .pokemon-item__types{
    width: 100%;
    height: 30px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    }

  }
`
