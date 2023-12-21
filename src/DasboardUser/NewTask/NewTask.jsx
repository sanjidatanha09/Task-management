import React, { useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import Select from 'react-select';

const options1 = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },

];

const NewTask = () => {
    const { user } = useAuth();

    const [selectedOption, setSelectedOption] = useState(null);

    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;



        const titles = form.titles.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
       
    

        const email = user?.email;
       



        const newdata = {
           titles,description,deadline, priority,email

            // addfee: parseInt(addfee)
        }

        console.log(newdata);

        //send data to the server 
        // fetch('https://assignment12-server-alpha.vercel.app/postdatas', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newdata)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'BioData Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })

        //         }
        //     })

    }
    return (
        <div className='mt-16 '>

            <div className='border text-gray-600 font-bold text-3xl max-w-2xl mx-auto text-center  p-12 bg-[#F4F3F0]'>
                <div className='text-end flex justify-end items-center'>
                    <img className='w-[20px] rounded-full' src={user?.photoURL} alt="" />
                    <p className='text-sm font-bold text-orange-700'>{user?.displayName}</p>




                </div>
                <div className='text-end text-orange-700'>
                    <p className='text-sm font-bold'>{user?.email}</p>

                </div>




                <h2 className='text-5xl font-bold text-orange-600 mb-5'></h2>
                <form onSubmit={handleAddTask}>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-orange-700 font-bold lg:text-xl">Titles</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="titles" placeholder="Titles " className="input input-bordered w-full text-orange-500 font-bold lg:text-xl" />
                        </label>
                    </div>




                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-orange-700 font-bold lg:text-xl"> Description</span>
                        </label>
                        <label className="input-group">

                            <textarea type="text" name="description" placeholder="Description" className=" text-orange-500 input input-bordered w-full" />
                        </label>
                    </div>



                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-orange-700 font-bold lg:text-xl">Deadline</span>
                        </label>
                        <label className="input-group">


                            <input type="date" name="deadline" placeholder="Deadline " className="input input-bordered w-full text-orange-500 font-bold lg:text-xl" />
                        </label>



                    </div>

                   
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Priority</span>
                            </label>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options1}
                            name="priority"

                        />
                        </div>

         


                   

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Donator Email</span>
                            </label>
                            <label className="input-group">

                                <input type="email" disabled defaultValue={user?.email} name="email" placeholder="donator email" className="input input-bordered w-full text-orange-500" />
                            </label>
                        </div>
           

                    <div className='pt-10'>
                        <button className="btn btn-primary text-white lg:text-2xl ">Add Task</button>

                    </div>






                </form>



            </div>
            <div className='pb-32'>

            </div>
        </div>
    );
};

export default NewTask;