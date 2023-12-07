
import { Outlet } from "react-router-dom";
import NavBar from "../Page/NavBar/NavBar";
import Footer from "../Page/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;