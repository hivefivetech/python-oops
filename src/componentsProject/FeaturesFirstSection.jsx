import React from 'react'

import Icon1 from '../assets/icons/face-recognition.png'
import Icon2 from '../assets/icons/emotion-analysis.png'
import Icon3 from '../assets/icons/analytics.png'
import Icon4 from '../assets/icons/ocr.png'
import Icon5 from '../assets/icons/image-processing.png'

const Card = ({ title, content, image }) => (
    <div className="bg-white shadow-md rounded-lg px-6 py-12 flex flex-col gap-8 cursor-pointer duration-300 hover:bg-[#e4f0ff] hover:shadow-xl border border-transparent hover:translate-y-[-4px] hover:border-[#bed8ff]">
        <div className='w-24 h-24 bg-brandPrimary p-6 rounded-full'>
            <img src={image} alt='' />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content}</p>
    </div>
);

const FeaturesFirstSection = () => {

    const cards = [
        { title: 'Face Recognition Detection', content: 'Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional', image: Icon1 },
        { title: 'Emtion Analysis', content: 'Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional', image: Icon2 },
        { title: 'Video Analytics', content: 'Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional', image: Icon3 },
        { title: 'Character Recognition', content: 'Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional', image: Icon4 },
        { title: 'Image Processing', content: 'Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional', image: Icon5 },
    ];

    return (
        <div className='flex flex-col justify-center items-center py-24 gap-6 bg-neutralSilver px-10 md:px-20 lg:px-36 xl:px-48'>
            <div className=''>
                <div className='flex flex-col justify-start items-start gap-6'>
                    {/* <h3 className='text-brandPrimary text-[18px] font-bold tracking-wider'>OBJECT DETECTION</h3>
                    <h1 className='text-neutralDGrey text-[42px] font-semibold'>The Most Personalized Object Detection</h1> */}

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <Card key={index} title={card.title} content={card.content} image={card.image} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesFirstSection