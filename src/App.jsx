import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Header from "./components/Header/Header.jsx";
import List from "./pages/List/List.jsx";
import Home from "./pages/Home/Home.jsx";
import Create from "./pages/Create/Create.jsx";
import MyToast from "./components/MyToast/MyToast.jsx";
import EditProgress from "./pages/EditProgress/EditProgress.jsx";
import Ranking from "./pages/Ranking/Ranking.jsx";

export default function App () {
  return (
    <BrowserRouter style={{ display: 'flex' }}>
      <Header />
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/list" element={ <List /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/create" element={ <Create /> } />
        <Route path="/progress" element={ <EditProgress /> } />
        <Route path="/ranking" element={ <Ranking /> } />
      </Routes>
      <MyToast />
    </BrowserRouter>
  )
}