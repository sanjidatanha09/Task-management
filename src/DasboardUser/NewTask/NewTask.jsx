import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import Select from 'react-select';
import Swal from 'sweetalert2';

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

const NewTask = () => {
    const { user } = useAuth();
    useEffect(() => {
        document.title = "Dashboard || New Task";
    }, [])

    const [selectedOption, setSelectedOption] = useState(null);

    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;



        const titles = form.titles.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const typeoff = form.typeoff.value;




        const email = user?.email;




        const newdata = {
            titles, description, deadline, priority, email, typeoff

            // addfee: parseInt(addfee)
        }

        console.log(newdata);

        //send data to the server 
        fetch('https://task-server-management.vercel.app/postnewtask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'BioData Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }
    return (
        <div className='mt-16 '>

            <div className='border text-gray-600 font-bold text-3xl max-w-2xl mx-auto text-center  p-12 bg-[#F4F3F0]'>
                <div className='text-end flex justify-end items-center'>
                    <img className='w-[20px] rounded-full' src={user?.photoURL} alt="" />
                    <p className='text-sm font-bold text-[#4141e2]'>{user?.displayName}</p>




                </div>
                <div className='text-end text-[#4141e2]'>
                    <p className='text-sm font-bold'>{user?.email}</p>

                </div>




                <h2 className='text-5xl font-bold text-orange-600 mb-5'></h2>
                <form onSubmit={handleAddTask}>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-[#4141e2] font-bold lg:text-xl">Titles</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="titles" placeholder="Titles " className="input input-bordered w-full text-[#8888eb] font-bold lg:text-sm" />
                        </label>
                    </div>




                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-[#4141e2] font-bold  lg:text-xl"> Description</span>
                        </label>
                        <label className="input-group">

                            <textarea type="text" name="description" placeholder="Description" className=" text-[#8888eb] input input-bordered p-2 w-full" />
                        </label>
                    </div>



                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-[#4141e2] font-bold lg:text-xl">Deadline</span>
                        </label>
                        <label className="input-group">


                            <input type="date" name="deadline" placeholder="Deadline " className="input input-bordered w-full text-[#8888eb] font-bold lg:text-sm" />
                        </label>



                    </div>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-[#4141e2] font-bold lg:text-xl">Priority</span>
                        </label>
                        <Select className='text-sm text-[#8888eb]'
                            defaultValue={selectedOption}
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