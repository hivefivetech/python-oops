import React, { useEffect, useRef } from 'react';

import Company1 from '../assets/company1.png';
import Company2 from '../assets/company2.png';
import Company3 from '../assets/company3.png';
import Company4 from '../assets/company4.png';
import Company5 from '../assets/company5.png';
import Company6 from '../assets/company6.png';
import Company7 from '../assets/company7.png';

import ServiceImg1 from '../assets/service-img1.png'
import {Link} from 'react-router-dom'

const Services = () => {
    const carouselRef = useRef(null);
    const logos = [
        Company1,
        Company2,
        Company3,
        Company4,
        Company5,
        Company6,
        Company7,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const firstChild = carouselRef.current.firstChild;
                carouselRef.current.appendChild(firstChild);
                carouselRef.current.style.transition = 'none';
                carouselRef.current.style.transform = 'translateX(0)';

                setTimeout(() => {
                    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
                    carouselRef.current.style.transform = `translateX(-${100 / 5}%)`;
                }, 50);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='px-10 sm:px-20 md:px-40 lg:px-20 xl:px-48 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>

                <div className='my-12 overflow-hidden carousel-container'>
                    <div ref={carouselRef} className='flex carousel-track'>
                        {logos.concat(logos).map((logo, index) => (
                            <div key={index} className='flex-none w-1/5 p-4'>
                                <img src={logo} alt={`Company logo ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row justify-between items-start gap-8 mt-20'>
                <div className='rounded-lg overflow-hidden w-full'>
                    <img src={ServiceImg1} alt='' />
                </div>
                <div className='flex flex-col items-start gap-3 w-full'>
                    <h3 className='text-brandPrimary text-[18px] font-bold tracking-wider'>OBJECT DETECTION</h3>
                    <h1 className='text-neutralDGrey text-[35px] font-semibold'>Advanced Object Detection for Furniture</h1>
                    <p>Softec Software’s object detection module accurately identifies furniture and inventory for households and offices. Using a dataset of over 12,000 images, our system reliably recognizes objects in images and videos.</p>
                    <p>Ideal for removals companies, solicitors, and insurance firms, this tool simplifies surveys, property assessments, and insurance claims with fast, precise object recognition. Leverage our technology for efficient inventory management and space organization.</p>
                    <Link to="/demo">
                        <button className='py-3 px-6 mt-3 bg-brandPrimary duration-300 rounded-full text-white hover:bg-neutralDGrey hover:scale-105'>CHECK IT OUT</button>
                    </Link>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-start gap-8 mt-28'>
                <div className='flex flex-col items-start gap-3 w-full'>
                    <h3 className='text-brandPrimary text-[18px] font-bold tracking-wider'>LISTING FUNCTIONS</h3>
                    <h1 className='text-neutralDGrey text-[35px] font-semibold'>Automated Listing Functions with Computer Vision</h1>
                    <p>When our software module detects objects from images or videos, all identified items—such as furniture—are automatically listed, providing a comprehensive overview in just seconds. Powered by advanced computer vision, artificial intelligence, and machine learning, the system ensures precise and efficient cataloging of every object. This automated listing function streamlines the process, making it easy to manage and review detected items quickly, saving you time and delivering instant, accurate results.</p>
                    <Link to="/demo">
                        <button className='py-3 px-6 mt-3 bg-brandPrimary duration-300 rounded-full text-white hover:bg-neutralDGrey hover:scale-105'>CHECK IT OUT</button>
                    </Link>
                </div>
                <div className='rounded-lg overflow-hidden w-full'>
                    <img src={ServiceImg1} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Services;
