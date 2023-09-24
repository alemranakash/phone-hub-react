import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;