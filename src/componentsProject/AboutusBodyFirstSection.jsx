import { CircleCheck } from 'lucide-react'
import React from 'react'
import AboutusGif from '../assets/aboutusGif.gif'

const AboutusBodyFirstSection = () => {
    return (
        <div className='flex flex-col justify-center items-center py-12 gap-6 px-12 sm:px-32'>
            <div className='flex gap-4 flex-col lg:flex-row justify-between items-center'>
                <div className='w-full'>
                    <img src={AboutusGif} alt='' />
                </div>
                <div className='w-full flex flex-col justify-start items-start px-0 sm:px-14'>
                    <p className='text-[16px] font-bold text-brandPrimary mb-1'>ABOUT US</p>
                    <h1 className='text-[42px] text-black font-bold mb-5'>Innovators in Computer Vision & AI Solutions</h1>
                    <p className='text-[16px] text-neutralGrey mb-8'>Welcome to Object Detection UK, your expert provider of advanced computer vision and AI solutions. Our dedicated team delivers high-accuracy, tailored services to meet your unique needs. Let our innovative technology drive your success in a digital world.</p>
                    <div className='flex flex-col md:flex-row justify-between items-start gap-2 md:gap-24'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>Machine Learning</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>Deep Learning</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>Artificial Intelligence</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>Image Processing</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>Computer Vision</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>Recognition</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>AI Chatbot</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <CircleCheck className='text-brandPrimary w-5 h-5' />
                                <p className='text-[18px] text-neutralGrey duration-300 hover:underline'>Detection</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-8'>
                        <button className='px-6 py-3 flex items-center justify-center text-center bg-brandPrimary duration-300 hover:bg-[#2b5996] text-white rounded-lg tracking-wide text-[15px]'>CONTACT US</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutusBodyFirstSection