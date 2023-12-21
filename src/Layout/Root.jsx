import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#F0F8FF] ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;