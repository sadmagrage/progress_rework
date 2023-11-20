import { styled } from "styled-components";

export const ListStyled = styled.div`
    background-color: ${ props => !props.darkMode ? "#fff" : "#111" };
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;