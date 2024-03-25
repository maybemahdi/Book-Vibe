import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Layout = () => {
    return (
        <div className="w-[85%] mx-auto">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Layout;