import React from 'react';
import Banner from '../../Home/Banner';
import Footer from '../../Home/Footer';


const Type = () => {
    
    return (
        <div>
            <Banner></Banner>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">SCC Technovision In.!</h1>
                        <p className="py-6">The Task Management Platform developed by SCC Technovision Inc. offers several benefits for developers, enhancing their productivity and organization.</p>
                        <p className="py-6">Developers can efficiently organize their tasks using the platform. The drag-and-drop functionality allows them to prioritize and manage tasks seamlessly between the to-do, ongoing, and completed lists.the Task Management Platform caters to developers' specific needs by providing a user-friendly interface, efficient task management features, and collaboration tools. These elements collectively contribute to improved organization, productivity, and teamwork in the development process.</p>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Type;