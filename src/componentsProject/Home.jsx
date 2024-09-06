import React from 'react';
import BannerImg from '../assets/banner-img.jpg';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container' id='home'>
            <div className='px-4 md:px-14 lg:px-6 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20'>
                    <div className='w-full lg:w-[50%] flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                        <h1 className='mt-0 md:mt-12 lg:mt-0 text-5xl font-semibold mb-4 text-white md:text-neutralDGrey text-center lg:text-left leading-snug'>
                            Transforming Removals with <span className='text-brandPrimary'>Computer Vision AI</span>
                        </h1>

                        <p className='text-white md:text-neutralGrey text-base mb-8 text-center lg:text-left'>
                            Advanced Furniture Object Detection Software for Removals Companies, Solicitors, and Insurance Firms
                        </p>
                        <Link to="/demo">
                            <button  className='px-7 py-3 bg-brandPrimary rounded text-white text-[18px] duration-300 hover:bg-neutralDGrey hover:translate-y-[-4px] cursor-pointer'>
                                Check Our Demo
                            </button>
                        </Link>
                    </div>

                    <div className='hidden md:flex justify-end mt-6 lg:mt-0 w-[60%] lg:w-[50%] rounded-lg overflow-hidden'>
                        <img src={BannerImg} alt='' className='w-[100%] h-[100%]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
