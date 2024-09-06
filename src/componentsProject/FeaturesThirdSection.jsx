import React from 'react'
import FeaturesImg2 from '../assets/FeaturesImg2.png'
import Icon1 from '../assets/icons/artificial-intelligence.png'

const FeaturesThirdSection = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around items-center py-24 gap-6 bg-neutralSilver px-14 lg:px-20 xl:px-24'>

            <div className='w-full'>
                <img src={FeaturesImg2} alt='' />
            </div>

            <div className='flex flex-row justify-between items-start w-full'>
                <div className='w-full flex flex-col justify-start items-start gap-5'>
                    <h1 className='text-[42px] text-neutralDGrey font-bold'>We Are Provide Best Features For You</h1>
                    <p className='text-[16px] text-neutralGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                    <div className='flex flex-row flex-wrap justify-start items-start gap-4 sm:gap-8'>
                        <div className='bg-white duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-8 py-12 rounded-md flex flex-col justify-center items-center gap-3 w-[300px] text-center'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[22px] font-semibold'>Advanced Programming</p>
                            <p className='text-[16px] text-neutralGrey'>Find out what's working and what's not Dig into your data to find</p>
                        </div>

                        <div className='bg-white duration-300 hover:bg-neutralDGrey text-neutralDGrey hover:text-white px-8 py-12 rounded-md flex flex-col justify-center items-center gap-3 w-[300px] text-center'>
                            <img src={Icon1} alt='' className='w-8 h-8' />
                            <p className='text-[22px] font-semibold'>Learning & Planning</p>
                            <p className='text-[16px] text-neutralGrey'>Find out what's working and what's not Dig into your data to find</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturesThirdSection