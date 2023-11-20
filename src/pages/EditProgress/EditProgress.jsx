import { useEffect, useState } from "react";
import { deleteProgress, findOne, updateProgress } from "../../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateStyled, ProgressForm, SubmitButton, TimestampComponent } from "../Create/Create.styled";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { ConfirmDelete, DeleteBtn, DeleteButton, DeleteButtons, DeleteMessage, ProgressHeader } from "./EditProgress.styled";
import { toast } from "react-toastify";
import { getAuthToken } from "../../utils/auth";

export default function EditProgress () {

    const [progressId, setProgressId] = useState();
    const [attempt, setAttempt] = useState();
    const [datetime, setDatetime] = useState();
    const [timestamp, setTimestamp] = useState();
    const [confirmationCall, setConfirmationCall] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const changeValue = (e) => {
        setDatetime(e);
        setTimestamp(e.valueOf());
    }

    const updatingProgress = () => {
        toast.dismiss();
        toast.loading("Atualizando progress");

        updateProgress({ progressId, attempt, timestamp })
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
                setProgressId(data.progressId);
                setAttempt(data.attempt);
                setTimestamp(data.timestamp);
            });
    }, []);

    if (!getAuthToken()) {
        navigate("/");
        return;
    }

    return (
        <CreateStyled>
            <ProgressForm confirm={ (!confirmationCall) } >
                <ProgressHeader>
                    <h3>Attempt: { attempt }</h3>
                    <DeleteBtn src="./delete_ico.png" onClick={ setConfirmationCall } />
                </ProgressHeader>
                <TimestampComponent>{ !timestamp ? "" : timestamp }</TimestampComponent>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <MobileDateTimePicker onChange={ changeValue } value={ !datetime ? null : datetime } />
                </LocalizationProvider>
                <SubmitButton onClick={ () => updatingProgress() }>Submit</SubmitButton>
            </ProgressForm>
            <ConfirmDelete confirm={ confirmationCall }>
                <DeleteMessage>Você tem certeza que deseja deletar o progress ?</DeleteMessage>
                <DeleteButtons>
                    <DeleteButton onClick={ deletingProgress } >Sim</DeleteButton>
                    <DeleteButton onClick={ () => setConfirmationCall(false) } >Não</DeleteButton>
                </DeleteButtons>
            </ConfirmDelete>
        </CreateStyled>
    )
}