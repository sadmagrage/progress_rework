import { useEffect, useState } from "react";
import { HomeContainer, Timer } from "./Home.styled";
import CircularProgress from '@mui/joy/CircularProgress';
import { findLast } from "../../utils/api";
import useTheme from "../../context/ThemeContext";

export default function Home () {

    const [timestamp, setTimestamp] = useState(0);
    const [timer, setTimer] = useState("");
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);
    const { darkMode, toggleTheme } = useTheme();

    useEffect(() => {
        findLast()
            .then(data => {
                setTimestamp(parseInt(data.timestamp));
            });
    }, []);

    useEffect(() => timestampDiffToTime(), [timer]);

    const timestampDiffToTime = () => {
        setTimeout(() => {
            const timestampDiff = new Date().getTime() - timestamp;
            
            const day = parseInt(timestampDiff / 1000 / 3600 / 24);
            const hour = parseInt(timestampDiff / 1000 / 3600 % 24);
            const minute = parseInt(timestampDiff / 1000 / 60 % 60);
            const second = parseInt(timestampDiff / 1000 % 60);

            setTimer(`${ day }:${ hour }:${ minute }:${ second }`);

            setProgress(hour / 24 * 100);
            if (loading && timestamp != 0) setLoading(false);
        }, 1000);
    };

    return (
        <HomeContainer darkMode={ darkMode } >
            <CircularProgress determinate value={ progress } color="danger" variant="plain" sx={{ "--CircularProgress-size": "300px" }} thickness={ 3 } >
                { loading ? <CircularProgress thickness={ 3 } /> : <Timer>{ timer }</Timer> }
            </CircularProgress>
        </HomeContainer>
    )
}