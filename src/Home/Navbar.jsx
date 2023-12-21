import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Select from 'react-select';
import { useState } from "react";




const Navbar = () => {
    const { user, logOut } = useAuth();
    

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()

    }

    const navLinks = <>
        <li className="font-bold lg:text-base text-gray-600"> <NavLink to="/">Home</NavLink></li>
     

        {
            user?.email ? <>
                <li className="font-bold lg:text-base text-gray-600"> <NavLink to="/type">Type</NavLink></li>


            </>

                :
                <li></li>
        }
        

        {
            user?.email ? <>
                <li className="font-bold lg:text-base text-gray-600"> <NavLink to="/task">Task</NavLink></li>


            </>

                :
                <li></li>
        }
      

        {
            user?.email ? <>
                <li className="font-bold lg:text-base text-gray-600"> <NavLink to="/project">Project</NavLink></li>


            </>

                :
                <li></li>
        }

        
       
        {
            user?.email ? <>
            
                <li className="font-bold lg:text-base text-gray-600"> <NavLink to="/dashboard">Dashboard</NavLink></li>
               

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
                    <a className="text-xs md:text-xl lg:text-xl font-bold text-gray-700">SCC Technovision Inc</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     
                        {navLinks}
                     
                    </ul>
                    
                </div>
                <div className="navbar-end">
                    <div className='text-center  flex justify-between gap-2  items-center pr-10'>
                        <img className='hidden lg:inline lg:w-[35px] rounded-full' src={user?.photoURL} alt="" />
                        <p className='hidden lg:inline text-lg font-bold text-[#4141e2]'>{user?.displayName}</p>




                    </div>
                    
                    {
                        user ?

                            
                            <button onClick={handleSignOut} className='btn btn-primary text-white'>Log Out</button>

                            :
                            <Link className='flex justify-center items-center gap-3' to="/login">
                                <NavLink className='text-xl font-medium text-white btn btn-primary' to="/login">Login</NavLink>

                            </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;