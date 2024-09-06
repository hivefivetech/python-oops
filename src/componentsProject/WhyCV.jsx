import React from 'react'

import Icon1 from '../assets/icons/truck.png'
import Icon2 from '../assets/icons/house.png'
import Icon3 from '../assets/icons/insurance.png'
// import Icon4 from '../assets/icons/ocr.png'
// import Icon5 from '../assets/icons/image-processing.png'

const Card = ({ title, content, image }) => (
    <div className="bg-white rounded-lg px-4 py-10 flex flex-col gap-8 cursor-pointer duration-300 hover:bg-[#e4f0ff] border border-[#f0f0f0] hover:border-[#bed8ff]">
        <div className='w-24 h-24 bg-brandPrimary p-6 rounded-full'>
            <img src={image} alt='' />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content}</p>
    </div>
);

const WhyCV = () => {
    const cards = [
        { title: 'Removals Companies', content: 'Object detection software streamlines the moving process for removals companies by providing accurate inventories from images or videos. This technology enables swift cataloging of items, reducing manual errors and ensuring a more organized move. Removals companies can offer faster, more efficient services, and all their customers can easily access detailed itemized lists. Additionally, it serves as an effective survey tool, helping companies assess and plan moves with greater precision.', image: Icon1 },
        { title: 'Solicitors', content: 'For solicitors, object detection software is a powerful tool for property assessments and estate planning. By accurately identifying and listing furniture and assets from visual data, solicitors can gather crucial information quickly, aiding in legal documentation and asset distribution. This streamlines processes, ensuring all relevant items are accounted for, and all clients can benefit from this efficient service. The software also proves useful as a survey tool, offering detailed overviews during property evaluations.', image: Icon2 },
        { title: 'Insurance Firms', content: 'Insurance firms can enhance claims processing with object detection software by automatically detecting and listing items from images or videos. This technology speeds up claim assessments, reduces disputes, and ensures accurate evaluation of insured assets. All customers can use this tool for quicker, more transparent settlements and a smoother claims experience. Additionally, it functions as an effective survey tool, providing detailed inventories for better risk assessment and policy management.', image: Icon3 },
    ];

    return (
        <div className='px-4 md:px-20 lg:px-32 xl:px-48 py-16 w-full'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <h3 className='text-brandPrimary text-[18px] font-bold tracking-wider'>Solutions for Various Industries</h3>
                <h1 className='text-neutralDGrey text-[42px] font-semibold'>Efficient Applications for Removals, Legal, and Insurance Services</h1>

                <div className='w-full flex flex-col lg:flex-row justify-between gap-4'>
                    {cards.slice(0, 3).map((card, index) => (
                        <div key={index} className="w-full lg:w-[400px] shadow-xl"> {/* Adjusted width for 3 cards */}
                            <Card title={card.title} content={card.content} image={card.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyCV
