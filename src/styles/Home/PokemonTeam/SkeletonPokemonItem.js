import styled from 'styled-components'

export const SkeletonPokemonItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 3s ease-in-out infinite;
  
  width: 100%;
  height: 75px;
  /* background-color: #000; */

  & > .Pokemon-Team--skeleton-image{
    width: 60px;
    height: 60px;
  }

  & > .Pokemon-Team--skeleton-name{
    width: 80%;
    height: 20px;
    border-radius: 5px;
    background-color: #4a4242;
  }

  @keyframes fadeIn {
        0% {
          opacity: 0.8;
        }
        50%{
          opacity: 0.2;
        }
        to {
          opacity: 0.8;
        }
      }


`
