import React from 'react';

import usePreviTask from '../../Hooks/usePreviTask';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';


const PreviousTask = () => {
    const axiosSecure = useAxiosSecure();
    const [PreviousTask,refetch] = usePreviTask();

   

    const handleDlete = getuser => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/taskdelete/${getuser._id}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }


                    })

            }
        });



    }

    return (
        <div>
            <h2 className='text-xl font-bold text-gray-500 text-center mb-5'>Previous Task :{PreviousTask.length}</h2>

            <div className='lg:ml-10 grid gap-5 h-[200px] md:h-[400px] lg:h-[500px]'>

                {
                    PreviousTask.map((getuser, index) => <div key={getuser._id} className="card  bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title text-gray-700 font-bold text-xl">Task Name : {getuser.titles}</h2>
                            <p className='text-base md:text-lg lg:text-lg text-gray-600'>{getuser.description}</p>
                            <p className='text-base md:text-lg lg:text-lg text-gray-600'>Deadline :{getuser.deadline}</p>
                            <p className='text-base md:text-lg lg:text-lg text-gray-600'>Priority : {getuser.priority}</p>
                            <div className="card-actions">
                                <button onClick={() => handleDlete(getuser)} className="btn text-white font-bold bg-[#8282d8]">Delete</button>
                                <Link to={`/dashboard/updateTask/${getuser._id}`}>
                                    <button className="btn text-white font-bold bg-[#8282d8]">Update</button>
                                
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default PreviousTask;