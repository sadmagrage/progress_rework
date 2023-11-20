import styled from "styled-components";

export const CreateStyled = styled.div`
    background-color: ${ props => !props.darkMode ? "#fff" : "#111" };
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProgressForm = styled.div`
    width: 400px;
    height: min-content;
    background-color: ${ props => !props.darkMode ? "rgba(220,220,220,0.8)" : "#333" };
    padding: 8px;
    border-radius: 15px;
    display: ${ props => props.confirm ? "flex" : "none" };
    flex-direction: column;
`;

export const AttemptComponent = styled.h3`
    color: ${ props => props.darkMode ? "white" : "black" };
`

export const TimestampComponent = styled.h5`
    color: ${ props => props.darkMode ? "white" : "black" };
    margin-bottom: 8px;
    text-align: center;
`;

export const SubmitButton = styled.button`
    background-color: ${ props => props.darkMode ? "#111" : "white" };
    margin: 5px;
    border-color: transparent;
    color: blue;
    border-radius: 15px;
    &: hover {
        cursor: pointer;
    }
`;