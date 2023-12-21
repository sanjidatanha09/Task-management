import React from 'react';

const About = () => {
    return (
        <div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-600">About us</h1>
                <div className="lg:max-w-6xl mx-auto ">
                    <div className="hero-content flex-col justify-between lg:flex-row-reverse gap-10">

                        <div className="text-center lg:text-left lg:w-1/2 ">
                            <img className='h-[430px] w-full rounded-xl' src="https://www.uniformmart.net/wp-content/uploads/2019/10/about.png" alt="" />
                        </div>
                        <div className=" w-full lg:max-w-sm lg:w-1/2 ">
                            <div className='p-2'>
                                <h1 className='font-bold mb-5 lg:text-xl'>Get to know about us and relive our journey</h1>
                                <p className='text-base '>At our showroom, we are dedicated to service for you.Some people think about us pages have to sound formal to gain credibility and trust. Well, thats not entirely correct, because most people find it easier to trust not-so-formal human beings. So keep your us page friendly and real.</p>

                                <button className="mt-5 btn btn-info text-white font-bold ">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;