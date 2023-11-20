import { useNavigate } from "react-router-dom";
import { HeaderName, HeaderStyle, NavLink, ToggleMode, UserRedirect } from "./Header.styled";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getAuthToken } from "../../utils/auth";
import useTheme from "../../context/ThemeContext";

export default function Header () {
    
    const [username, setUsername] = useState("");
    const { darkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        if (getAuthToken()) setUsername(jwtDecode(getAuthToken()).username);
    }, []);

    return (
        <HeaderStyle>
            <HeaderName onClick={ () => navigate("/") } >Progress Rework</HeaderName>
            <NavLink onClick={ () => navigate("/list") } >List</NavLink>
            <NavLink onClick={ () => navigate("/create") } >Create</NavLink>
            <NavLink onClick={ () => navigate("/ranking") } >Ranking</NavLink>
            <ToggleMode darkMode={ darkMode } onClick={ toggleTheme } >{ darkMode ? "Light Mode" : "Dark Mode" }</ToggleMode>
            { !username ? <UserRedirect onClick={ () => navigate("/login") }>Login</UserRedirect> : <UserRedirect onClick={ () => navigate("/login") }>{ username }</UserRedirect> }
        </HeaderStyle>
    )
};