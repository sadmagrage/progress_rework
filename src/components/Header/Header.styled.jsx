import styled from "styled-components"

export const HeaderStyle = styled.div`
    background-color: black;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderName = styled.div`
    color: white;
    margin-left: 5px;
    font-size: 30px;

    &:hover {
        cursor: pointer;
    }
`;

export const UserRedirect = styled.p`
    color: white;
    margin: 5px;
    align-self: center;
    &:hover {
        cursor: pointer;
    }
`;

export const NavLink = styled.h5`
    color: white;

    &:hover {
        cursor: pointer;
    }
`;

export const ToggleMode = styled.button`
    border-color: transparent;
    background-color: ${ props => props.darkMode ? "#333" : "#fff" };
    color: ${ props => !props.darkMode ? "black" : "white" };
    padding: 5px;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`;