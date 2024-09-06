import React from 'react'
import { Link } from 'react-router-dom';
import PricingBgImg from '../assets/bg.jpg';

const Pricing = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${PricingBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '50vh',
            }}
            className='flex justify-center items-center'
        >
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-[44px] font-bold tracking-wider'>Pricing</h1>
                {/* <div className='flex flex-row justify-center items-center gap-2 mt-1'>
                    <Link to='/'>Home</Link>
                    <p>//</p>
                    <p>Pricing</p>
                </div> */}
            </div>
        </div>
    )
}

export default Pricing