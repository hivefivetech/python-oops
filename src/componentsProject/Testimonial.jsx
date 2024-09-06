import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialBgImg from '../assets/bg-testimonial.jpg'
import TestimonialImg1 from '../assets/testimonial1.jpg'
import TestimonialImg2 from '../assets/testimonial2.jpg'
import TestimonialImg3 from '../assets/testimonial3.jpg'
import TestimonialImg4 from '../assets/testimonial4.jpg'
import TestimonialImg5 from '../assets/testimonial5.jpg'
import TestimonialImg6 from '../assets/testimonial6.png'
import { StarIcon } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-lg">
            <p className="text-gray-600">{testimonial.text}</p>
            <div className="mt-4 flex items-center">
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                />
                <div className="ml-4 flex flex-col justify-start items-start text-start">
                    <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className='flex flex-row gap-1'>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className='text-[#e8c506] fill-[#e8c506] w-4 h-4 mt-2' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Testimonial = () => {
    const testimonials = [
        {
            author: "Emma Johnson",
            text: "Softec’s object detection software has revolutionized our moving process. Its accuracy and speed in cataloging items are unmatched, making our operations more efficient and enhancing client satisfaction. I highly recommend it for any removals company seeking to streamline their services.",
            image: TestimonialImg2,
            role: "Operations Manager at a Removals Company",
        },
        {
            author: "Michael Thompson",
            text: "In handling complex property assessments, Softec’s object detection tool has proven indispensable. It delivers precise and rapid cataloging of assets, crucial for legal documentation and estate planning. This software is a valuable asset for any legal firm aiming for efficiency and accuracy.",
            image: TestimonialImg1,
            role: "Senior Solicitor",
        },
        {
            image: TestimonialImg4,
            text: "Integrating Softec’s object detection software into our claims process has yielded excellent results. The tool’s ability to accurately list and assess insured items from images has streamlined our claims handling and improved transparency. It’s essential for any insurance firm looking to enhance their claims processing.",
            author: "Sophia Martinez",
            role: "Claims Adjuster at an Insurance Firm",
        },
        {
            image: TestimonialImg3,
            text: "Softec’s object detection software has greatly improved our inventory management and space assessments. The tool efficiently catalogs furniture and assets, aiding in detailed surveys and reports. It’s an invaluable resource for companies involved in asset management and space planning.",
            author: "David Anderson",
            role: "Project Coordinator at an Asset Management Firm",
        },
        {
            image: TestimonialImg6,
            text: "The object detection technology from Softec has significantly improved our moving projects. Its quick and accurate item listing has streamlined our operations and boosted customer satisfaction. I strongly recommend this solution to other removals companies aiming to optimize their processes.",
            author: "Olivia Green",
            role: "Director at a Removals Company",
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div
            className='px-10 sm:px-20 py-10 sm:py-8 flex items-center justify-center'
            style={{
                backgroundImage: `url(${TestimonialBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
            }}
        >
            <div className='flex flex-col justify-center items-center text-center gap-4 w-full'>
                <h3 className='text-white text-[18px] font-semibold tracking-wider'>TESTIMONIALS</h3>
                <h1 className='text-white text-[32px] sm:text-[42px] font-semibold'>Happy Client Reviews</h1>
                <div className='w-full max-w-6xl mb-6'>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
