import React, { useEffect } from 'react';
import Banner from '../../Home/Banner';
import Footer from '../../Home/Footer';


const Type = () => {
    useEffect(() => {
        document.title = "Developer";
    }, [])

    
    return (
        <div>
            <Banner></Banner>
            <div className="hero   my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full lg:w-1/2'>
                        <img  src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" className="w-full rounded-lg shadow-2xl" />

                    </div>
                    
                    <div className=' w-full lg:w-1/2'>
                        <h1 className="lg:text-5xl font-bold text-gray-500">Developer</h1>
                        <p className="py-6 text-gray-500">The Task Management Platform developed by SCC Technovision Inc. offers several benefits for developers, enhancing their productivity and organization.</p>
                        <p className="py-6 text-gray-500">Developers can efficiently organize their tasks using the platform. The drag-and-drop functionality allows them to prioritize and manage tasks seamlessly between the to-do, ongoing, and completed lists.the Task Management Platform caters to developers' specific needs by providing a user-friendly interface, efficient task management features, and collaboration tools. These elements collectively contribute to improved organization, productivity, and teamwork in the development process.</p>

                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <div className="hero   my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full  lg:w-1/2 lg:mr-5'>
                        <img src="https://www.theforage.com/blog/wp-content/uploads/2022/08/investment-banker.jpg" className="w-full h-full rounded-lg shadow-2xl" />

                    </div>

                    <div className=' w-full lg:w-1/2'>
                        <h1 className="lg:text-5xl font-bold text-gray-500">Bankers!</h1>
                        <p className="py-6 text-gray-500"> Design a comprehensive website that serves as a valuable resource for individuals interested in corporate professions. Organize the content to provide detailed insights into various corporate roles, including executive positions, human resources, finance, marketing, and more. Clearly articulate the responsibilities and day-to-day tasks associated with each profession, offering a holistic view of the corporate landscape..</p>
                        <p className="py-6 text-gray-500">
                            Incorporate engaging multimedia content, such as interviews with professionals in different roles, success stories, and industry trends. Provide guidance on educational paths, certifications, and skills required for success in corporate professions. Include sections on career development, networking, and the latest advancements in corporate practices.</p>

                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <div className="hero   my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full lg:w-1/2'>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/professional-corporation.jpeg" className="w-full rounded-lg shadow-2xl" />

                    </div>

                    <div className=' w-full lg:w-1/2'>
                        <h1 className="lg:text-5xl font-bold text-gray-500">Corporate Profession!</h1>
                        <p className="py-6 text-gray-500">The Task Management Platform developed by SCC Technovision Inc. offers several benefits for developers, enhancing their productivity and organization.</p>
                        <p className="py-6 text-gray-500">Developers can efficiently organize their tasks using the platform. The drag-and-drop functionality allows them to prioritize and manage tasks seamlessly between the to-do, ongoing, and completed lists.the Task Management Platform caters to developers' specific needs by providing a user-friendly interface, efficient task management features, and collaboration tools. These elements collectively contribute to improved organization, productivity, and teamwork in the development process.</p>

                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Type;