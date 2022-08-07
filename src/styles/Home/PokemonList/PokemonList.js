import styled from 'styled-components'

export const PokemonListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 10px;
  width: 100%;
  margin: 25px 0 50px 0;
  padding-bottom: 100px;
  align-items: center;
  justify-content: center;

  @media (min-width: 740px) {
    max-width: 720px;
    gap: 20px;
  }

`

export const PokemonListTitle = styled.h2`
    font-size: 1.2rem;
    text-align: center;
`
