import { useEffect, useState } from "react"
import { findAll } from "../../utils/api";
import { RankingEnd, RankingItem, RankingList, RankingPosition, RankingStart, RankingTimer, RankingTimestamp } from "./Ranking.styled";
import useTheme from "../../context/ThemeContext";

export default function Ranking () {

    const [ranking, setRanking] = useState([]);
    const [atualizador, setAtualizador] = useState(true);
    const { darkMode } = useTheme();

    const dataToRanking = (dataObj2, dataObj1) => {
            const dateAtual = new Date(parseInt(dataObj2.timestamp));
            const dateAnterior = new Date(parseInt(dataObj1.timestamp));

            const diff = dateAtual - dateAnterior;

            const day = parseInt(diff / 1000 / 3600 / 24);
            const hour = parseInt(diff / 1000 / 3600 % 24);
            const minute = parseInt(diff / 1000 / 60 % 60);
            const second = parseInt(diff / 1000 % 60);

            ranking.push({
                distance: `Attempt: ${ dataObj2.attempt } - ${ dataObj1.attempt }`,
                timestampDiff: diff,
                timer: `${ day }:${ hour }:${ minute }:${ second }`,
                startDate: dateAnterior.toString(),
                endDate: dateAtual.toString()
            });
    }

    const iterateData = (data) => {
        
        data.map((item, index) => {

            if (index != 0) {
                dataToRanking(item, data[index - 1]);

                if (index == data.length - 1) dataToRanking({ attempt: "now", timestamp: new Date().getTime() }, item);
            }
        });
    };

    useEffect(() => {
        findAll()
            .then(data => {
                if (ranking.length == 0) {
                    iterateData(data);
                    setRanking(ranking.sort((a, b) => b.timestampDiff - a.timestampDiff));
                    atualizador ? setAtualizador(false) : setAtualizador(true);
                }
            });
    }, []);

    return (
        <RankingList darkMode={ darkMode } >
            {
                ranking.map((item, index) => 
                <RankingItem  current={ item.distance.indexOf("now") !== -1 } darkMode={ darkMode } key={ item.distance }>
                    <RankingPosition darkMode={ darkMode } >{ index + 1 } - { item.distance }</RankingPosition>
                    <RankingTimestamp darkMode={ darkMode } >{ item.timestampDiff }</RankingTimestamp>
                    <RankingTimer darkMode={ darkMode } >{ item.timer }</RankingTimer>
                    <RankingStart darkMode={ darkMode } >Start: { item.startDate }</RankingStart>
                    <RankingEnd darkMode={ darkMode } >End: { item.endDate }</RankingEnd>
                </RankingItem>)
            }
        </RankingList>
    )
}