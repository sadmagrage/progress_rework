import styled from "styled-components";

export const ProgressStyled = styled.div`
    background-color: ${ props => !props.darkMode ? "#fff" : "#111" };
    width: 70%;
    height: 120px;
    border-width: 2px;
    border-style: solid;
    border-left: none;
    border-right: none;
    border-image-source: linear-gradient(90deg, white, black, black, black, white);
    border-image-slice: 1;
    border-image-repeat: round;
    margin: 5px;

    &:hover {
        cursor: pointer;
    }
`;

export const ProgressAttempt = styled.p`
    color: ${ props => props.darkMode ? "#fff" : "#111" };
    font-size: 30px;
`;

export const ProgressTimestamp = styled.p`
    color: ${ props => props.darkMode ? "#fff" : "#111" };
    font-size: 20px;
    text-align: center;
`;

export const ProgressDate = styled.p`
    color: ${ props => props.darkMode ? "#fff" : "#111" };
    font-size: 20px;
    text-align: center;
`;