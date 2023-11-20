import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: ${ props => !props.darkMode ? "#fff" : "#111" };
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Timer = styled.p`
    font-size: 30px;
`;