import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer, FaRegEyeSlash, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/UseAuth';

const Registration = () => {
    const [registererror, setRegistererror] = useState('');
    const [showpassword , setShowpassword] =useState(false);
   
    const { createUser }= useAuth();

    const location = useLocation();
    console.log('location login page', location)

    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Foodie | Registration";
    }, [])


    const handleRegistration = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const displayName = form.get('displayName')
        const photoURL = form.get('photoURL')
        const email =form.get('email')
        const password = form.get('password')
        console.log(displayName, photoURL,email, password);

        //reset error
        setRegistererror('');

    
        if (password.length < 6) {
            setRegistererror('password is less than 6 characters');
            return;
        }
        
        else if (!/[A-Z]/.test(password)) {
            setRegistererror('shoult have atleast one capital letter');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            setRegistererror('please use spcecial character');
            return;
        }


       

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                //new user has been created
               
                const createAt = result.user?.metadata?.creationTime;

                const user = { email, createAt: createAt};
                navigate(location?.state ? location?.state : '/')
                
                fetch('https://assignment-11-server-smoky-mu.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user added success');
                            Swal.fire({
                                title: 'Success!',
                                text: 'user added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })

                        }
                    })
            })
            .catch(error => {
                console.error(error)
                toast(error.message);

            })

    }

    return (
        <div className='my-16 text-center'>
            <h1 className="text-3xl lg:text-5xl font-bold mb-10 text-orange-600">Please Registration </h1>
            {
                registererror && <p className=' text-black mb-5 text-xl font-semibold'>{registererror}</p>
            }
    
            
            <div className='bg-slate-300 rounded-lg shadow-lg md:w-3/4 lg:w-1/2 mx-auto h-[650px]'>
                
                <form onSubmit={handleRegistration} className='  card-body ' >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl text-orange-600">Name</span>
                        </label>
                        <input type="text" placeholder="displayName" name="displayName" className="input input-bordered text-orange-800" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl text-orange-600">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photoURL" className="input input-bordered text-orange-800" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl text-orange-600">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered text-orange-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl text-orange-600">Password</span>
                        </label>
                        <div className=' relative'>
                            <input
                                type={showpassword ? "text" : "password"}
                                name='password'
                                placeholder="password"
                                className="input text-orange-800 input-bordered w-full"
                                required />
                            <span className='bottom-4 lg:bottom-[14px] right-4 absolute' onClick={() => setShowpassword(!showpassword)}>
                                {
                                    showpassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                }

                            </span>
                            
                        </div>
                       

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning text-white md:text-xl  lg:text-2xl lg:w-[250px] mx-auto font-bold">Registar</button>
                    </div>





                </form>

                
                <p className='font-bold mb-3 text-orange-600'>Already have an account? <Link className='text-orange-400 font-bold text-2xl lg:text-2xl' to="/login">Login</Link> </p>
           </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;