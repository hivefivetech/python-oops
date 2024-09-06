import React from 'react';
import { Link } from 'react-router-dom';
import ContactBgImg from '../assets/bg.jpg';

const Contact = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${ContactBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '50vh',
            }}
            className='flex justify-center items-center'
        >
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-[44px] font-bold tracking-wider'>Contact Us</h1>
                {/* <div className='flex flex-row justify-center items-center gap-2 mt-1'>
                    <Link to='/'>Home</Link>
                    <p>//</p>
                    <p>Contact Us</p>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;
