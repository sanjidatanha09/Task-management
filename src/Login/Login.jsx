import  {  useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGofore } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  FaRegEyeSlash, FaEye } from 'react-icons/fa';

import Lottie from 'lottie-react';
import loginanimation from '../../public/login.json'
import axios from 'axios';
import useAuth from '../Hooks/UseAuth';



const Login = () => {
    const [showpassword, setShowpassword] = useState(false);

   
    const {signIn,googleSignIn} =useAuth();

   

    
    const location = useLocation();
    console.log('location login page', location)

    const navigate = useNavigate();



    useEffect(() => {
        document.title = "Foodie | Login";
    }, [])
    
   

    const handleGoogle = () => {
        googleSignIn().then(result => {
            console.log(result.user)
            toast('user login successfully');
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName

            }
            navigate(location?.state ? location?.state : '/')
        });
    };

  

    const handleLogin = e =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // console.log( email, password);

        signIn(email,password)
            .then(result =>{
                toast('user login successfully');
                const loggedInUser = result.user
                console.log(loggedInUser);
                const user = {email};

                //get access token
                axios.post('https://assignment-11-server-smoky-mu.vercel.app/jwt',user,{withCredentials:true})
                .then(res =>{
                    console.log(res.data)
                    if(res.data.success){
                        //navigate after login
                        navigate(location?.state ? location?.state : '/')
                    }
                })                
            })
            .catch(error =>{
                console.error(error);
                toast(error.message);
            })
    }
    return (
       <div>
            <div className='flex flex-col lg:flex-row w-full px-10 md:pb-10'>
                <div className="text-center lg:text-left lg:w-[50%] lg:mt-36">

                    <Lottie animationData={loginanimation}></Lottie>

                    
                </div>

                <div className='lg:w-[50%]'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-10 mb-8 text-center text-orange-600">Login Here</h1>
                    <div className='bg-slate-300 rounded-lg shadow-lg  h-[580px]'>
                        <form onSubmit={handleLogin} className='  card-body  ' >


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl md:text-3xl lg:text-3xl text-orange-600">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered text-orange-700" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl md:text-3xl lg:text-3xl text-orange-600">Password</span>
                                </label>
                                {/* toggle use */}

                                <div className='relative'>
                                    <input type={showpassword ? "text" : "password"} name='password' placeholder="password" className="input text-orange-700 input-bordered w-full" required />

                                    <span className='bottom-4 lg:bottom-[14px] right-4 absolute' onClick={() => setShowpassword(!showpassword)}>
                                        {
                                            showpassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                        }

                                    </span>

                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold text-orange-600">Forgot password?</a>
                                </label>

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-warning text-white md:w-[200px] lg:w-[200px] mx-auto md:text-xl lg:text-2xl font-extrabold ">Login</button>
                            </div>





                        </form>
                        <div className='text-center mt-5'>
                            <h2 className="text-lg mb-2 font-bold text-orange-600 ">or Login With</h2>
                            <div className='flex  gap-5 justify-center items-center py-4'>
                                <button onClick={handleGoogle} className='btn md:text-xl lg:text-xl font-bold btn-warning text-white'>
                                    <FaGofore></FaGofore>Google
                                </button>
                                <br />
                                <button className='btn md:text-xl lg:text-xl font-bold btn-warning text-white'>
                                    <FaGithub></FaGithub>Github
                                </button>

                            </div>


                        </div>
                        <p className='font-bold mb-3 text-center text-orange-700'>Don't have an account? <Link className='text-orange-400 font-bold lg:text-xl' to="/registration">Register</Link> </p>
                    </div>

                </div>



                <ToastContainer />
            </div>
       </div>
    );
};

export default Login;