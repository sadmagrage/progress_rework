import styled from "styled-components";

export const RankingList = styled.div`
    background-color: ${ props => !props.darkMode ? "#fff" : "#111" };
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RankingItem = styled.div`
    width: 500px;
    height: 150px;
    background-color: ${ props => !props.darkMode ? "rgba(220,220,220,0.8)" : "#333" };
    color: ${ props => props.current ? `blue` : `${ props.darkMode ? "white" : "black" }` };
    margin: 5px;
    padding: 8px;
    border-radius: 15px;
`;

export const RankingPosition = styled.h2`
    width: 100%;
    text-align: center;
`;

export const RankingTimestamp = styled.h3`
    width: 100%;
    text-align: center;
`;

export const RankingTimer = styled.h2`
    text-align: center;text-align: center;
`;

export const RankingStart = styled.h5`
    text-align: center;
`;

export const RankingEnd = styled.h5`
    text-align: center;
`;