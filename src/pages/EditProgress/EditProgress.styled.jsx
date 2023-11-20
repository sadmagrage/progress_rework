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
    display: flex;
    justify-content: space-between;
`;

export const DeleteBtn = styled.img`
    width: 15px;
    height: 15px;
    align-self: center;
    &:hover {
        cursor: pointer;
    }
`;

export const ConfirmDelete = styled.div`
    display: ${ props => props.confirm ? "flex" : "none" };
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(220,220,220,0.8);
    width: 400px;
    height: 70px;
    padding: 10px;
    border-radius: 15px;
`;

export const DeleteMessage = styled.h5`
    text-align: center;
    width: 100%
`;

export const DeleteButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const DeleteButton = styled.button`
    color: blue;
    width: 100px;
    border-color: transparent;
    border-radius: 15px;
`;