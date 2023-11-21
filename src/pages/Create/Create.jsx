import { useEffect, useState } from "react";
import { AttemptComponent, CreateStyled, ProgressForm, SubmitButton, TimestampComponent } from "./Create.styled";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { findLast, save } from "../../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../../utils/auth";
import useTheme from "../../context/ThemeContext";

export default function Create () {

    const [attempt, setAttempt] = useState("");
    const [timestamp, setTimestamp] = useState();
    const [dateTime, setDateTime] = useState("");
    const { darkMode } = useTheme();
    const navigate = useNavigate();

    const okButton = () => {
        const timestamp = new Date(dateTime).getTime();

        save({ attempt, timestamp })
            .then(() => {
                toast.success("Registrado com sucesso");
                navigate("/");
            })
            .catch(() => {
                toast.error("Houve alguma complicação");
            });
    }

    useEffect(() => {
        findLast()
            .then(data => setAttempt(data.attempt + 1));
    }, []);

    if (!getAuthToken()) {
        navigate("/");
        return;
    }

    return (
        <CreateStyled darkMode={ darkMode }>
            <ProgressForm darkMode={ darkMode } confirm={true} >
                <AttemptComponent darkMode={ darkMode } >Attempt: { attempt }</AttemptComponent>
                <TimestampComponent darkMode={ darkMode } >{ !timestamp ? "" : timestamp }</TimestampComponent>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <MobileDateTimePicker onChange={ (e) => {setDateTime(e); setTimestamp(new Date(e).getTime())} } value={ dateTime } />
                </LocalizationProvider>
                <SubmitButton darkMode={ darkMode } onClick={ okButton }>Submit</SubmitButton>
            </ProgressForm>
        </CreateStyled>
    )
}