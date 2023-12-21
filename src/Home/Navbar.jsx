import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Select from 'react-select';
import { useState } from "react";




const Navbar = () => {
    const { user, logOUt } = useAuth();
    

    const handleSignOut = () => {
        logOUt()
            .then()
            .catch()

    }

    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/type">Developers</NavLink></li>
        <li> <NavLink to="/task">Task</NavLink></li>
        <li> <NavLink to="/project">Project</NavLink></li>
        {
            user?.email ? <>
                <li> <NavLink to="/dashboard">Dashboard</NavLink></li>
               

            </>

                :
                <li></li>
        }
       


    </>

    return (
        <div>
            
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           
                            {navLinks}
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">SCC Technovision Inc</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     
                        {navLinks}
                     
                    </ul>
                    
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleSignOut} className='btn btn-warning text-white'>Log Out</button>

                            :
                            <Link className='flex justify-center items-center gap-3' to="/login">
                                <NavLink className='text-xl font-bold text-white btn btn-warning' to="/login">Login</NavLink>

                            </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;