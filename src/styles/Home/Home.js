import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    max-width: 70%;
  }
`
