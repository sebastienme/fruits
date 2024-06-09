import { Outlet } from "react-router-dom";
import Navbar from "./component/Nav/Navbar.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App;