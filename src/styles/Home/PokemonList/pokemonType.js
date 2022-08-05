import styled from 'styled-components';

export const Type = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 40px;
    padding: 5px;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
    background-color: ${props => props.color}; 
    color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    font-size: 1rem;

`