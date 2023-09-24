import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div >
            <nav className="flex justify-between items-center shadow-md p-5">
                <Logo></Logo>
                <ul className="flex gap-5">
                <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favourite"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
                            }
                        >
                            Favourite
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
                            }
                        >
                           Login
                        </NavLink>
                    </li>
                  
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;