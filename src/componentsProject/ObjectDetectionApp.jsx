// import React from 'react'

import ObjectDetectionAppImg from '../assets/bg-segmentation.jpg'

import AppStore from '../assets/appstoreNew.png'
import PlayStore from '../assets/playstoreNew.png'

import MobileImg from '../assets/mobile-app-layer.png'

const ObjectDetectionApp = () => {
    return (
        <div
            className='px-10 sm:px-24 xl:px-48 py-10 sm:py-12 flex items-center justify-center'
            style={{
                backgroundImage: `url(${ObjectDetectionAppImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
            }}
        >
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <div className='flex flex-col justify-start items-start gap-5 w-full px-0 lg:px-10 xl:px-20'>
                    <h1 className='text-white text-[36px] md:text-[32px] lg:text-[50px] font-semibold'>Smart AI Object Detection App</h1>
                    <p className='text-white text-[16px] md:text-[15px] lg:text-[18px]'>Revolutionize surveys and inspections for removals companies, solicitors, and insurance firms with the Smart Furniture Object app.<br />An essential tool for assessing private homes and offices.</p>

                    <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8'>
                        <img src={AppStore} className='w-48' />
                        <img src={PlayStore} className='w-48' />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center animate-upDown'>
                    <img src={MobileImg} />
                </div>
            </div>
        </div>
    )
}

export default ObjectDetectionApp