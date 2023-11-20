import { useState } from "react";
import { LoginButton, LoginCamp, LoginContainer, LoginForm, LoginInput, LoginLabel, LoginTitle } from "./Login.styled";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fazerLogin } from "../../utils/api";
import { setAuthToken } from "../../utils/auth";
import useTheme from "../../context/ThemeContext";

export default function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { darkMode } = useTheme();
    const navigate = useNavigate();

    const loginAction = () => {
        toast.dismiss();
        toast.loading("Efetuando login");

        fazerLogin({ username, password })
            .then(token => {
                setAuthToken(token);
                toast.dismiss();
                toast.success("Login realizado com sucesso");
                navigate("/");
            })
            .catch(() => {
                toast.dismiss();
                toast.error("Falha ao realizar login");
            });
    }

    return (
        <LoginContainer darkMode={ darkMode } >
            <LoginForm darkMode={ darkMode } >
                <LoginTitle>Login</LoginTitle>
                <LoginCamp>
                    <LoginLabel>Username:</LoginLabel>
                    <LoginInput darkMode={ darkMode } type="text" value={ username } onChange={ (e) => setUsername(e.target.value) } />
                </LoginCamp>
                <LoginCamp>
                    <LoginLabel>Password:</LoginLabel>
                    <LoginInput darkMode={ darkMode } type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
                </LoginCamp>
                <LoginButton darkMode={ darkMode }  onClick={ loginAction } >Login</LoginButton>
            </LoginForm>
        </LoginContainer>
    )
}