import styled from 'styled-components'

export const PokemonMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 125px;
  border-radius: 10px;
  border: 1px solid #000;
  background: ${props => props.gradient};
  position: relative;
  cursor: pointer;
  animation: show 0.5s ease-in-out;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;

  @keyframes show {
    from {
      transform: translate(150px, -50px);
    }
    to {
      transform: translate(0, 0);
    }
  } 


    
  & > .pokeball-animated{
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 50%;
    left: 0%;
    animation: showPokemon 3s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 1s;

    @keyframes showPokemon {
      from {
        bottom: 50%;
        left: 0%;
        transform: rotate(0deg);
      }
      25% {
        bottom: 20%;
        left: 30%;
        transform: rotate(1080deg);
      }
      30% {
        bottom: 20%;
        left: 30%;
        transform: rotate(1080deg);
      }
      85% {
        bottom: 50%;
        left: 90%;
        opacity: 1;
      
      }
      90%{
        opacity: 0.1;
      }
      100%{
        bottom: 60%;
        left: 70%;
        transform: rotate(5040deg);
        opacity: 0;
      }
    }
  }

  & > .pokemon-member__image{
    width: 100px;
    height: 100px;
    opacity: 0;
    animation: openPokeball 2s ease-in-out;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    overflow: hidden;


    @keyframes openPokeball {
      from {
        transform: scale(0);
        opacity: 1;
      }
      70% {
        transform: scale(1);
        filter: none;
      }
      75% {
        transform: rotate(0deg);
      }
      85%{
        transform: rotate(10deg);
      }
      95%{
        transform: rotate(-10deg);
      }
      to {
        transform: rotate(0deg);
        opacity: 1;
      }
    }
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
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
    cursor: pointer;
    opacity: 0;

    animation: scale 0.5s ease-in-out;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;

    @keyframes scale{
      from{
        transform: scale(0.5);
        opacity: 0;
      }
      to{
        transform: scale(1);
        opacity: 1;
      }
    }  
  }

  & > .pokemon-member__hp{
    display: none;
  }

  @media (min-width: 1024px) {
    height: 100px;
    min-width: 250px;
    margin-top: 10px;
    margin: 10px auto 0 auto; 


    & > .pokemon-member__image{
      width: 75px;
      height: 75px;
      margin-right: 130px;
    }

    & > .pokemon-member__hp{
    position: absolute;
    top: 10px;
    right: 70px;
    width: 65px;
    height: 30px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    padding: 2px;
    opacity: 0;
    animation : scaleBar 0.5s ease-in-out;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    overflow: hidden;

    @keyframes scaleBar{
      from{
        transform: scale(0);
        opacity: 1;}
      to{
        transform: scale(1);
        opacity: 1;
      }}

    & > .pokemon-member__hp--name{
      width: 50%;
      height: 100%;
      text-align: center;
      font-size: 1.1rem;
      color: #000;
      vertical-align: middle;
    }

    & > .pokemon-member__hp--stat{
      width: 50%;
      height: 100%;
      text-align: center;
      font-size: 1.1rem;
      color: #000;
      font-weight: bold;
      vertical-align: middle;
    }
  }
}
`
