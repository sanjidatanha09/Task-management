import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


const Task = () => {
    const PreviousTask = useLoaderData()
    console.log(PreviousTask);
    useEffect(() => {
        document.title = "Task";
    }, [])

    return (
        <div>
            <div className='pb-10'>
                <h2 className='text-xl font-bold text-gray-500 text-center my-5'>Total Task :{PreviousTask.length}</h2>

                <div className='lg:mx-10 grid gap-5 h-[200px] md:h-[400px] lg:h-[500px]'>

                    {
                        PreviousTask.map((getuser, index) => <div key={getuser._id} className="card  bg-base-100 shadow-xl">

                            <div className="card-body">
                                <h2 className="card-title mb-0 text-gray-600 font-bold text-xl">Task Name : {getuser.titles}</h2>
                                <p className='text-base md:text-lg lg:text-lg text-gray-600'>{getuser.description}</p>
                                <p className='text-base md:text-lg lg:text-lg text-gray-600'>Deadline : {getuser.deadline}</p>
                                <p className='text-base md:text-lg lg:text-lg text-gray-600'>Priority  : {getuser.priority}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleDlete(getuser)} className="btn text-white font-bold bg-[#8282d8]">Delete</button>
                                  
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Task;