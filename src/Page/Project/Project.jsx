import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


const Project = () => {
    const PreviousTask = useLoaderData()
    console.log(PreviousTask);

    useEffect(() => {
        document.title = "Project";
    }, [])


    return (
        <div>
            <div className=''>
                <h2 className='text-xl font-bold text-gray-500 text-center mb-5'>Top Project  :{PreviousTask.length}</h2>

                <div className='lg:mx-10 grid gap-5 h-[200px] md:h-[400px] lg:h-[500px]'>

                    {
                        PreviousTask.map((getuser, index) => <div key={getuser._id} className="card  bg-base-100 shadow-xl">

                            <div className="card-body">
                                <h2 className="card-title text-gray-600 font-bold text-xl">Project Title: {getuser.Project_title}</h2>
                                <p className='text-base md:text-lg lg:text-lg text-gray-600'>{getuser.Project_details}</p>
                                <p className='text-base md:text-lg lg:text-lg text-gray-600'>Deadline : {getuser.Deadline}</p>
                            
                                <div className="card-actions">
                                    <button className="btn text-white font-bold bg-[#8282d8]">view</button>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Project;