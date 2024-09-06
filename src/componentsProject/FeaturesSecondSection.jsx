import React from 'react'

import FeaturesImg from '../assets/FeaturesImg.png'

import Icon1 from '../assets/icons/artificial-intelligence.png'

const FeaturesSecondSection = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-around items-center py-24 gap-6 bg-white px-14 lg:px-28 xl:px-48'>

            <div className='flex flex-row justify-between items-start w-full'>
                <div className='w-full flex flex-col justify-start items-start gap-5'>
                    <h1 className='text-[42px] text-neutralDGrey font-bold'>We Are Provide Best Features For You</h1>
                    <p className='text-[16px] text-neutralGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                    <div className='flex flex-row flex-wrap justify-start items-start gap-4 sm:gap-8'>
                        <div className='bg-neutralSilver duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-5 py-3 rounded-md flex flex-row justify-around items-center gap-3'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[16px] font-semibold'>Advanced Programming</p>
                        </div>
                        <div className='bg-neutralSilver duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-5 py-3 rounded-md flex flex-row justify-around items-center gap-3'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[16px] font-semibold'>Knowledge Reasoning</p>
                        </div>
                        <div className='bg-neutralSilver duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-5 py-3 rounded-md flex flex-row justify-around items-center gap-3'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[16px] font-semibold'>Deep Learning</p>
                        </div>
                        <div className='bg-neutralSilver duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-5 py-3 rounded-md flex flex-row justify-around items-center gap-3'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[16px] font-semibold'>Bayesian Networks</p>
                        </div>
                        <div className='bg-neutralSilver duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-5 py-3 rounded-md flex flex-row justify-around items-center gap-3'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[16px] font-semibold'>Control Problem</p>
                        </div>
                        <div className='bg-neutralSilver duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-5 py-3 rounded-md flex flex-row justify-around items-center gap-3'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[16px] font-semibold'>Existential Risk</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex lg:justify-start justify-center'>
                <img src={FeaturesImg} alt='' />
            </div>
        </div>
    )
}

export default FeaturesSecondSection