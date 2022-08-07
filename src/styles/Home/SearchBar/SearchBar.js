import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 25px 0;

  & > input {
    width: 80%;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
    background: #2b2e2e;
    color: #fff;

    @media (min-width: 735px) {
    max-width: 570px;
    }
  }

  & > p{
    font-size: 1.2rem;
    color: #000;
    font-weight: bold;
  }
`
