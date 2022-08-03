import styled from 'styled-components'

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background-color: #2b2e2e;
  position: relative;
  padding: 5px;
  animation: fadeIn 3s ease-in-out infinite;

  & > .pokemon-item__add-remove{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
  }

  & > .pokemon-item__sprite{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 auto 0 15px 
  }

  & > .pokemon-item__name{
    width: 80%;
    height: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    background: #fff;
    margin: 10px auto 10px 15px;
    border-radius: 5px;
  }

  & > .pokemon-item__types{
    width: 100%;
    height: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    }

  & > .pokemon-item__types > .pokemon-item__types--type{
    width: 60px;
    height: 20px;
    border-radius: 5px;
    background-color: #fff;

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
  }
`
