import { Outlet } from "react-router-dom";
import Navbar from "./component/Nav/Navbar.jsx";
import { CartProvider } from "./Context.jsx";

const App = () => {
    return (
        <>
            <CartProvider>
                <Navbar />
                <Outlet />
            </CartProvider>
        </>
    )
}

export default App;