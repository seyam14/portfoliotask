import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";


const Main = () => {
    return (
        <div className="bg-teal-400">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;