import { useEffect, useState } from "react";
import Progress from "../../components/ProgressItem/Progress";
import { ListStyled } from "./List.styled";
import { findAll } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import useTheme from "../../context/ThemeContext";

export default function List () {

    const [progress, setProgress] = useState([]);
    const { darkMode } = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        findAll()
            .then(progressArr => setProgress(progressArr.sort((a, b) => b.attempt - a.attempt)));
    }, []);

    return (
        <ListStyled darkMode={ darkMode } >
            {
                progress.map(progressObj => <Progress darkMode={ darkMode }  progressItem={ progressObj } key={ progressObj.id } onClick={ () => navigate(`/progress?progress_id=${ progressObj.id }`) } />)
            }
        </ListStyled>
    )
}