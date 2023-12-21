import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import Select from 'react-select';


const options1 = [
    { value: 'Low', label: 'Low' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'High', label: 'High' },

];
const options2 = [
    { value: 'Developers', label: 'Developers' },
    { value: 'Corporate professions', label: 'Corporate professions' },
    { value: 'Bankers', label: 'Bankers' },

];

const TaskUpdate = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const update = useLoaderData();


    const { user } = useAuth();

    const handleUpdateTask = event => {
        event.preventDefault();
        const form = event.target;

        const titles = form.titles.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const typeoff = form.typeoff.value;

        const email = user?.email;

        const updatedProduct = {
            titles, description, deadline, typeoff, priority, email


        }

        console.log(updatedProduct);

        //send data to the server 
        fetch(` https://task-server-management.vercel.app/updatetasks/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }

    return (
        <div>
            <div className='mt-16 '>

                <div className='border text-gray-600 font-bold text-3xl max-w-2xl mx-auto text-center  p-12 bg-[#F4F3F0]'>
                    <div className='text-end flex justify-end items-center'>
                        <img className='w-[20px] rounded-full' src={user?.photoURL} alt="" />
                        <p className='text-sm font-bold text-[#4141e2]'>{user?.displayName}</p>




                    </div>
                    <div className='text-end  text-[#4141e2]'>
                        <p className='text-sm font-bold'>{user?.email}</p>

                    </div>


                    <form onSubmit={handleUpdateTask}>


                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[#4141e2] font-bold lg:text-xl">Titles</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="titles" defaultValue={update.titles} placeholder="Titles " className="input input-bordered w-full  text-[#8888eb] font-bold lg:text-xl" />
                            </label>
                        </div>




                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[#4141e2] font-bold lg:text-xl"> Description</span>
                            </label>
                            <label className="input-group">

                                <textarea defaultValue={update.description} type="text" name="description" placeholder="Description" className=" text-[#8888eb] input input-bordered p-2 w-full" />
                            </label>
                        </div>



                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[#4141e2] font-bold lg:text-xl">Deadline</span>
                            </label>
                            <label className="input-group">


                                <input defaultValue={update.deadline} type="date" name="deadline" placeholder="Deadline " className="input input-bordered w-full text-[#8888eb] font-bold lg:text-xl" />
                            </label>



                        </div>


                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[#4141e2] font-bold lg:text-xl">Priority</span>
                            </label>
                            <Select className='text-sm text-[#8888eb]'
                                defaultValue={update.priority}
                                onChange={setSelectedOption}
                                options={options1}
                                name="priority"

                            />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[#4141e2] font-bold lg:text-xl">Type Off</span>
                            </label>
                            <Select className='text-sm text-[#8888eb]'
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options2}
                                name="typeoff"

                            />
                        </div>






                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#4141e2] font-bold lg:text-xl">Donator Email</span>
                            </label>
                            <label className="input-group">

                                <input type="email" disabled defaultValue={user?.email} name="email" placeholder="donator email" className="input input-bordered w-full text-[#8888eb]" />
                            </label>
                        </div>


                        <div className='pt-10'>
                            <button className="btn btn-primary text-white lg:text-2xl ">Update Task</button>

                        </div>






                    </form>



                </div>
                <div className='pb-32'>

                </div>
            </div>

        </div>
    );
};

export default TaskUpdate;