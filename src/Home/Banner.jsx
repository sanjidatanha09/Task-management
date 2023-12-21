

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[600px]">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/ZgFsQVX/360-F-335510693-HY7m-Lg3-ARd-Lcc-Ko-Xk3m66-NLDp-JRJh51p.jpg' className="w-full rounded-lg" />
                    <div className="absolute flex items-center  h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='text-white space-y-7 pl-10 w-[300px] md:w-[500px]  lg:w-[870px] my-10'>
                            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Taste the freshness of locally sourced ingredients </h1>
                            <p className='text-sm md:text-xl lg:text-2xl'>Indulge in our dishes and taste the freshness of locally sourced ingredients, carefully selected to enhance your dining experience.</p>

                            <div className='flex gap-4 mt-5 text-white'>
                              
                                <button className='btn btn-warning text-white  btn-outline text-xs  lg:text-xl'>Lets Explore</button>

                            </div>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide2" className="btn btn-circle btn-warning text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-warning text-white">❯</a>
                    </div>

                </div>



                <div id="slide2" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/mJBw1S6/360-F-138506867-dd9m-ZE3wb-Hl-Qu4-Urok-M6-V4-Ia38ivvv-JO.jpg' className="w-full rounded-lg" />
                    <div className="absolute flex items-center  h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='text-white space-y-7 pl-10 w-[300px] md:w-[500px]  lg:w-[870px] my-10'>
                            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Taste the freshness of locally sourced ingredients </h1>
                            <p className='text-sm md:text-xl lg:text-2xl'>Indulge in our dishes and taste the freshness of locally sourced ingredients, carefully selected to enhance your dining experience.</p>

                            <div className='flex gap-4 mt-5 text-white'>
                               
                                <button className='btn btn-warning text-white  btn-outline text-xs  lg:text-xl'>Lets Explore</button>

                            </div>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide1" className="btn btn-circle btn-warning text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-warning text-white">❯</a>
                    </div>

                </div>




            </div>
        </div>
    );
};

export default Banner;