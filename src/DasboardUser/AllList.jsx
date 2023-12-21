import React from 'react';

const AllList = () => {
    return (
        <div className='grid md:grid-cols-3 gap-4 mx-10 mt-20'>
            <div className="card w-60 mx-auto h-[200px] bg-base-100 shadow-xl">
                
                <div className="card-body bg-[#EFDCF9] rounded-xl">
                    <h2 className="card-title  text-3xl text-[#62188a] mt-10 ml-8 ">To Do</h2>
                   
                    
                </div>
            </div>
            <div className="card w-60 mx-auto h-[200px] bg-base-100 shadow-xl">

                <div className="card-body bg-[#EFDCF9] rounded-xl">
                    <h2 className="card-title text-3xl text-[#62188a] mt-10 ml-8 ">ON Going</h2>


                </div>
            </div>
            <div className="card w-60 mx-auto h-[200px] bg-base-100 shadow-xl">

                <div className="card-body bg-[#EFDCF9] rounded-xl">
                    <h2 className="card-title text-3xl text-[#62188a] mt-10 ml-5 ">Completed</h2>


                </div>
            </div>
        </div>
    );
};

export default AllList;