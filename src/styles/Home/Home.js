import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(136,206,219,1) 100%);
  position: relative;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    max-width: 70%;
    /* display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: "searcher-team pokemon-team"; */
  }
`
