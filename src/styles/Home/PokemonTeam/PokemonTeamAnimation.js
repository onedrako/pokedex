import styled from 'styled-components';

export const SendPokemonToOak = styled.div`
  display: flex;
  grid-column: 1 / 3;
  /* border: 1px solid #000; */
  /* width: 100%; */
  width: 100%;
  height: 115px;
  margin-top: 10px;
  position: relative;
  /* position: fixed;
  bottom: 10px;
  right: -10px; */
  margin: 10px 0 0 auto;

  & > .pipe{
    width: 49%;
    height: 35%;
    border-radius: 5px;
    border-top: 20px solid #2c2c2c;
    border-left: 20px solid #2c2c2c;
    position: absolute;
    margin: 0 0 0 auto;
    /* right: 0; */
    right: -150px;
    animation: pipe 7s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;

    @keyframes pipe{
      from{
        right: -150px;
      }
      15%{
        right: -5px;
      }
      65%{
        right: -5px;
      }
      85%{
        right: -150px;
      }
      to{
        right: -150px;
      }
    };

  }

  & > .pokemon{
    margin-left: 30px;
    /* filter: opacity(0.4) drop-shadow(0 0 0 red); */
    animation: pokemon 5s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;

    @keyframes pokemon{
      0%{
        transform: rotate(0deg);
      }
      5%{
        transform: rotate(10deg);
      }
      15%{
        transform: rotate(-10deg);
      }
      20%{
        transform: rotate(0deg);
        filter: none;
        scale: 1;
      }
      45%{
        transform: rotate(0deg);
        filter: none;
        scale: 1;
        padding: 0;
      }
      45%{
        filter: opacity(0.4) drop-shadow(0 0 0 #c11427);
        scale: 1.1;
        opacity: 1;
      }
      55%{
        scale: 0;
        padding-top: 80px;
        padding-left: 50px;
        opacity: 0;
      }
      70%{
        scale: 0;
        opacity: 0;
      }
      100%{
        scale: 0;
        opacity: 0;
        padding-top: 80px;
        padding-left: 50px;
      }
    }
  }

  & > .pokeball{
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 10px;
    /* left: 48%; */
    left: 100%;
    
    animation: pokeball 7s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;

    @keyframes pokeball{
      0%{
        left: 100%;
        bottom: 10px;
        transform: rotate(0deg);
      }
      3%{
        bottom: 30px;
      }
      6%{
        bottom: 10px;
      }
      9%{
        bottom: 30px;
        transform: rotate(360deg);
      }
      12%{
        bottom: 10px;
      }  
      15%{
        left: 50%;
        bottom: 10px;
      }
      25%{
        left: 50%;
      }
      40%{
        left: 50%;
        scale: 1;
        bottom: 10px;
      }
      60%{
        scale: 0.6;
        left: 50%;
        bottom: 85px;
      }
      70%{
        left: 100%;
        scale: 0.6;
        bottom: 85px;
      }
      100%{
        left: 100%;
        scale: 0.6;
        bottom: 85px;
        transform: rotate(360deg);
      }
    } 
  }

  & > .laser{
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    background: #c11427;
    width: 10px;
    height: 10px;
    bottom: 23%;
    left: 53%; 
    opacity: 0;
    transform: rotate(360deg);
    
    animation: laser 2s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 3s;
    transition: all 0.5s;

    @keyframes laser{
      from{
        left: 53%;
        width: 10px;
        opacity: 1;
      }
      15%{
        left: 25%;
        width: 103px      
      }
      50%{
        left: 25%;
        width: 103px;
      }
      to{
        left: 53%;
        width: 10px;
        opacity: 1;
      }
      100%{
        opacity: 0;
      }
    }
  }

  & > .message{
    width: 100%;
    /* text-align: center; */
    height: 100%;
    display: flex;
    font-size: 1.3rem;
    grid-column: auto;
    /* padding: 15px; */
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 20px;
    opacity: 0;
    position: absolute;
    text-align: center;
    color : #000;

    animation: message 0.5s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 8s;

    @keyframes message{
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      } 
    }

  } 
`