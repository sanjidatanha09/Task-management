import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import UserHome from '../DasboardUser/UserHome';
import AllList from '../DasboardUser/AllList';

const Dashboard = () => {


    const { user, logOut } = useAuth();
    useEffect(() => {
        document.title = "Dashboard ";
    }, [])


    return (
        <div>

            <div className='lg:flex lg:max-w-7xl mx-auto min-h-screen bg-[#fff9f9]'>

                {/* sidebar content */}
                <div className=' lg:w-64  min-h-full bg-[rgb(186,183,235)] '>

                    <ul className='menu text-center p-5  text-sm lg:font-bold lg:text-xl text-white'>
                      

                        <li className=' bg-[#8888eb]  mb-5 rounded-xl  '><NavLink to='/dashboard/dashboard'>Dashboard</NavLink></li>

                        <li className='bg-[#8888eb] mb-5 rounded-xl   '><NavLink to='/dashboard/newtask'>New Task</NavLink></li>

                        <li className=' bg-[#8888eb] mb-5 rounded-xl '><NavLink to='/dashboard/previoustask'>Previous Task</NavLink></li>
                        


                        <li className='bg-[#8888eb] mb-5  rounded-xl   '><NavLink to='/'>LogOut</NavLink></li>


                        <hr className='my-10 ' />

                        <li className='bg-[#8888eb]  mb-5 rounded-xl '><NavLink to='/'>Home</NavLink></li>

                        <li className='bg-[#8888eb]  mb-5 rounded-xl  '><NavLink to='/type'>Developers</NavLink></li>

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