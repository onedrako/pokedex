import styled from 'styled-components';

export const Type = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 35px;
    padding: 5px;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
    background-color: ${props => props.color}; 
    color: #fff;
    font-size: 1rem;

`