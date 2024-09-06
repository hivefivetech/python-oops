import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { ClockIcon, FacebookIcon, InstagramIcon, MailIcon, MapIcon, PhoneIcon, TwitterIcon } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import TestimonialBgImg from '../assets/footerImg.png';

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div
            className='bg-brandPrimary w-full px-8 py-10'
            style={{
                backgroundImage: `url(${TestimonialBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col lg:flex-row gap-20 lg:gap-12 justify-around items-start'>
                    <div className='flex flex-col justify-between items-start gap-3 w-full'>
                        <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                            <span className='text-white'>Softec Softwares</span>
                        </a>
                        <p className='mt-3 text-white text-[17px]'>
                            Object detection & Recognition Softwares made with artificial intelligence and by our highly skilled development teams specialized in Computer Vision.
                        </p>
                        <div className='flex flex-row mt-2 justify-start items-center gap-3'>
                            <div className='w-12 h-12 p-2 cursor-pointer bg-white rounded-full flex items-center justify-center text-brandPrimary duration-300 hover:bg-black hover:text-white'>
                                <FacebookIcon />
                            </div>
                            <div className='w-12 h-12 p-2 cursor-pointer bg-white rounded-full flex items-center justify-center text-brandPrimary duration-300 hover:bg-black hover:text-white'>
                                <InstagramIcon />
                            </div>
                            <div className='w-12 h-12 p-2 cursor-pointer bg-white rounded-full flex items-center justify-center text-brandPrimary duration-300 hover:bg-black hover:text-white'>
                                <TwitterIcon />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-start gap-3 w-full'>
                        <h2 className='text-white text-[22px] tracking-wide font-semibold'>WORK HOURS</h2>
                        <p className='text-white text-[18px] mt-2'>10.00 AM - 6.00 PM , Monday - Saturday</p>
                        {/* <p className='text-white text-[18px] mt-2'>
                            Our Support and Sales team is available 24 * 7<br /> to answer your queries
                        </p> */}
                    </div>

                    <div className='flex flex-col justify-between items-start gap-3 w-[50%]'>
                        <h2 className='text-white text-[22px] tracking-wide font-semibold'>NAVIGATE</h2>
                        <Link to="/aboutus" className='text-white duration-300 hover:text-brandPrimary hover:scale-105 hover:font-semibold'>
                            About Us
                        </Link>
                        <Link to="/features" className='text-white duration-300 hover:text-brandPrimary hover:scale-105 hover:font-semibold'>
                            Features
                        </Link>
                        <Link to="/pricing" className='text-white duration-300 hover:text-brandPrimary hover:scale-105 hover:font-semibold'>
                            Pricing
                        </Link>
                        <Link to="/demo" className='text-white duration-300 hover:text-brandPrimary hover:scale-105 hover:font-semibold'>
                            Software Demo
                        </Link>
                    </div>

                    <div className='flex flex-col justify-between items-start gap-3 w-full'>
                        <h2 className='text-white text-[22px] tracking-wide font-semibold'>Contact Us</h2>
                        <div className='flex flex-row justify-start items-start gap-2 mb-2'>
                            <MapIcon className='text-brandPrimary' />
                            <p className='text-white'>Unit 1 A, Royal Victoria Dock, Western Gateway, London E16 1BS</p>
                        </div>
                        <div className='flex flex-row justify-start items-start gap-2 mb-2'>
                            <PhoneIcon className='text-brandPrimary' />
                            <a href="tel:+447734591036" className='text-white hover:text-brandPrimary duration-300'>
                                + (44) 07734591036
                            </a>
                        </div>
                        <div className='flex flex-row justify-start items-start gap-2 mb-2'>
                            <MailIcon className='text-brandPrimary' />
                            <a href="mailto:support@airemovals.co.uk" className='text-white hover:text-brandPrimary duration-300'>
                                support@airemovals.co.uk
                            </a>
                        </div>
                        <div className='flex flex-row justify-start items-start gap-2 mb-2'>
                            <FaWhatsapp className='text-brandPrimary w-6 h-6' />
                            <a href="https://wa.me/4799117060" className='text-white hover:text-brandPrimary duration-300'>
                                +(47) 99117060
                            </a>
                        </div>
                        <div className='flex flex-row justify-start items-start gap-2 mb-2'>
                            <ClockIcon className='text-brandPrimary' />
                            <a className='text-white'>09.00 AM - 05.00 PM</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center text-white items-center text-center'>
                    <p>Copyrights 2024 Furniture Detection</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
