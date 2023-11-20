import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyToast () {
    return <ToastContainer
        position="top-center"
        theme="dark"
        autoClose="3000"
        hideProgressBar="true"
    />
}