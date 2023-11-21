import styled from "styled-components";

export const EditProgressStyled = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EditProgressCard = styled.div`
    background-color: rgba(0,0,0,0.7);
    width: 600px;
    height: 400px;
    border-radius: 15px;
    padding: 8px;
`;

export const EditProgressCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProgressHeader = styled.div`
    background-color: ${ props => !props.darkMode ? "rgba(220,220,220,0.8)" : "#333" };
    display: flex;
    justify-content: space-between;
`;

export const DeleteBtn = styled.img`
    background-color: ${ props => props.darkMode ? "rgba(220,220,220,0.8)" : "#333" };
    padding: 2px;
    width: 15px;
    height: 15px;
    align-self: center;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`;

export const ConfirmDelete = styled.div`
    background-color: ${ props => props.darkMode ? "#333" : "rgba(220,220,220,0.8)" };
    display: ${ props => props.confirm ? "flex" : "none" };
    flex-direction: column;
    justify-content: space-around;
    width: 400px;
    height: 70px;
    padding: 10px;
    border-radius: 15px;
`;

export const DeleteMessage = styled.h5`
    color: ${ props => props.darkMode ? "white" : "black" };
    text-align: center;
    width: 100%
`;

export const DeleteButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const DeleteButton = styled.button`
    background-color: ${ props => props.darkMode ? "#111" : "white" };
    color: blue;
    width: 100px;
    border-color: transparent;
    border-radius: 15px;
    &:hover {
        cursor: pointer;
    }
`;