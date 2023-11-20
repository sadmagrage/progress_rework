import { ProgressAttempt, ProgressDate, ProgressStyled, ProgressTimestamp } from "./Progress.styled";

const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    let mes = "";

    switch (date.getMonth()) {
        case 0:
            mes = "Janeiro";
            break;
        case 1:
            mes = "Fevereiro";
            break;
        case 2:
            mes = "Março";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Maio";
            break;
        case 5:
            mes = "Junho";
            break;
        case 6:
            mes = "Julho";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Setembro";
            break;
        case 9:
            mes = "Outubro";
            break;
        case 10:
            mes = "Novembro";
            break;
        case 11:
            mes = "Dezembro";
            break;
    }

    return `${ date.getDate() } ${ mes } ${ date.getFullYear() } ${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }`;
};

export default function Progress ({ progressItem, onClick, darkMode }) {
    
    return (
        <ProgressStyled onClick={onClick} darkMode={ darkMode }>
            <ProgressAttempt darkMode={ darkMode } >Attempt: { progressItem.attempt }</ProgressAttempt>
            <ProgressTimestamp darkMode={ darkMode } >{ progressItem.timestamp }</ProgressTimestamp>
            <ProgressDate darkMode={ darkMode } >{ formatDate(progressItem.date) }</ProgressDate>
        </ProgressStyled>
    )    
}