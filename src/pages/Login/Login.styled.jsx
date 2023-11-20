import styled from "styled-components";

export const LoginContainer = styled.div`
    background-color: ${ props => !props.darkMode ? "#fff" : "#111" };
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginForm = styled.div`
    background-color: ${ props => !props.darkMode ? "rgba(220,220,220,0.8)" : "#333" };
    color: ${ props => props.darkMode ? "white" : "black" };
    width: 450px;
    height: min-content;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`;

export const LoginTitle = styled.h3`
    text-align: center;
`;

export const LoginCamp = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const LoginLabel = styled.label`
    font-size: 20px;
    width: 30%;
`;

export const LoginInput = styled.input`
    border-color: transparent;
    background-color: ${ props => !props.darkMode ? "#fff" : "#222" };
    color: ${ props => props.darkMode ? "#fff" : "#222" };
    width: 65%;
    outline: none;
    padding: 0px 5px;
    align-self: center;
`;

export const LoginButton = styled.button`
    background-color: ${ props => !props.darkMode ? "#fff" : "#222" };
    color: blue;
    width: 300px;
    margin: 10px;
    border-color: transparent;
    border-radius: 15px;
    align-self: center;
`;