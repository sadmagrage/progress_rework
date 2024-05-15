import { useEffect, useState } from "react";
import { deleteProgress, findOne, updateProgress } from "../../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { AttemptComponent, CreateStyled, ProgressForm, SubmitButton, TimestampComponent } from "../Create/Create.styled";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { ConfirmDelete, DeleteBtn, DeleteButton, DeleteButtons, DeleteMessage, ProgressHeader } from "./EditProgress.styled";
import { toast } from "react-toastify";
import { getAuthToken } from "../../utils/auth";
import useTheme from "../../context/ThemeContext";

export default function EditProgress () {

    const [progressId, setProgressId] = useState();
    const [attempt, setAttempt] = useState();
    const [datetime, setDatetime] = useState();
    const [timestamp, setTimestamp] = useState();
    const [confirmationCall, setConfirmationCall] = useState(false);
    const { darkMode } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const changeValue = (e) => {
        setDatetime(e);
        setTimestamp(e.valueOf());
    }

    const updatingProgress = () => {
        toast.dismiss();
        toast.loading("Atualizando progress");

        updateProgress(progressId, { attempt, timestamp })
            .then(() => {
                toast.dismiss();
                toast.success("Atualizado com sucesso");
                navigate("/");
            })
            .catch(() => {
                toast.dismiss();
                toast.error("Ocorreu algum erro");
            });
    };

    const deletingProgress = () => {
        toast.dismiss();
        toast.loading("Deletando progress");

        deleteProgress(progressId)
            .then(() => {
                toast.dismiss();
                toast.success("Deletado com sucesso");
                navigate("/");
            })
            .catch(() => {
                toast.dismiss();
                toast.error("Ocorreu algum erro");
                setConfirmationCall(false);
            });
    };

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        
        findOne(query.get("progress_id"))
            .then(data => {
                setDatetime(dayjs(parseInt(data.timestamp)));
                setProgressId(data.id);
                setAttempt(data.attempt);
                setTimestamp(data.timestamp);
            });
    }, []);

    if (!getAuthToken()) {
        navigate("/");
        return;
    }

    return (
        <CreateStyled darkMode={ darkMode } >
            <ProgressForm darkMode={ darkMode } confirm={ (!confirmationCall) } >
                <ProgressHeader darkMode={ darkMode } >
                    <AttemptComponent darkMode={ darkMode } >Attempt: { attempt }</AttemptComponent>
                    <DeleteBtn darkMode={ darkMode } src="./delete_ico.png" onClick={ setConfirmationCall } />
                </ProgressHeader>
                <TimestampComponent darkMode={ darkMode } >{ !timestamp ? "" : timestamp }</TimestampComponent>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <MobileDateTimePicker onChange={ changeValue } value={ !datetime ? null : datetime } sx={{  }} />
                </LocalizationProvider>
                <SubmitButton darkMode={ darkMode } onClick={ () => updatingProgress() }>Submit</SubmitButton>
            </ProgressForm>
            <ConfirmDelete darkMode={ darkMode } confirm={ confirmationCall }>
                <DeleteMessage darkMode={ darkMode } >Você tem certeza que deseja deletar o progress ?</DeleteMessage>
                <DeleteButtons>
                    <DeleteButton darkMode={ darkMode } onClick={ deletingProgress } >Sim</DeleteButton>
                    <DeleteButton darkMode={ darkMode } onClick={ () => setConfirmationCall(false) } >Não</DeleteButton>
                </DeleteButtons>
            </ConfirmDelete>
        </CreateStyled>
    )
}