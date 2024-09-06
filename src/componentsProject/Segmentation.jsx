// import React from 'react'

import SegmentationBgImg from '../assets/bg-segmentation.jpg'
// import SegmentationImg1 from '../assets/segmentation-img2.png'

import SegmentationImage1 from '../assets/segmentation-main1.png'
import SegmentationImage2 from '../assets/segmentation-main2.png'
import SegmentationImage3 from '../assets/segmentation-main3.png'
import {Link} from 'react-router-dom'

const Segmentation = () => {
    return (
        <div
            className='px-10 sm:px-20 py-10 sm:py-12 flex items-center justify-center'
            style={{
                backgroundImage: `url(${SegmentationBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
            }}
        >
            <div className='flex flex-col justify-center items-center text-center gap-4'>
                <h3 className='text-white text-[18px] font-semibold tracking-wider'>IMAGE SEGMENTATION</h3>
                <h1 className='text-white text-[32px] sm:text-[42px] font-semibold'>Deep Learning Model For Semantic<br />Image Segmentation</h1>
                <div className='flex flex-row flex-wrap justify-center items-center gap-8 mt-5 mb-6'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h3 className='text-[18px] font-semibold tracking-wider text-white'>Input Image</h3>
                        <img src={SegmentationImage1} alt='' className='' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h3 className='text-[18px] font-semibold tracking-wider text-white'>Semantic Segmentation</h3>
                        <img src={SegmentationImage2} alt='' className='' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h3 className='text-[18px] font-semibold tracking-wider text-white'>Instance Segmentation</h3>
                        <img src={SegmentationImage3} alt='' className='' />
                    </div>
                </div>
                <Link to="/demo">
                    <button className='py-3 px-6 bg-white duration-300 rounded-full text-brandPrimary hover:bg-neutralDGrey hover:text-white hover:scale-105'>CHECK IT OUT</button>
                </Link>
            </div>
        </div>
    )
}

export default Segmentation