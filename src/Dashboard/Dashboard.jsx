import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const Dashboard = () => {


    const { user, logOut } = useAuth();
    return (
        <div>

            <div className='lg:flex lg:max-w-7xl mx-auto min-h-screen bg-[#fff9f9]'>

                {/* sidebar content */}
                <div className=' lg:w-64  min-h-full bg-[#d89849] '>

                    <ul className='menu text-center p-5  text-sm lg:font-bold lg:text-xl text-white'>
                        {/* {
                            isAdmin ? <>

                                <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/adminhome'>Admin Home</NavLink></li>


                                <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/manageuser'>Manage Users</NavLink></li>

                                <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/approvedpremium'>Approved Premium</NavLink></li>

                                <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/approvedcontactrequest'>Approved Contact Request</NavLink></li>

                                <li
                                    className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/story'>Success Story</NavLink></li>

                                <li
                                    className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>LogOut</NavLink></li>


                                <hr className='my-10 ' />

                                <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>Home</NavLink></li>

                                <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/biodata'>BioDatas</NavLink></li>


                            </> : <> */}



                        <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/newtask'>New Task</NavLink></li>

                        <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/previoustask'>Previous Task</NavLink></li>
                        <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/previoustask'>Handle</NavLink></li>


                        <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>LogOut</NavLink></li>


                        <hr className='my-10 ' />

                        <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>Home</NavLink></li>

                        <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/type'>Developers</NavLink></li>

                        {/* </>
                        } */}



                    </ul>
                </div>

                {/* dashboard content  */}


                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;