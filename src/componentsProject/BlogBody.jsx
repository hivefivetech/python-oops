import React from 'react'

import { CalendarCheckIcon, UserIcon } from 'lucide-react'
import BlogImg1 from '../assets/blog1.jpg'
import BlogImg2 from '../assets/blog2.jpg'
import BlogImg3 from '../assets/blog3.jpg'

const BlogBody = () => {

    const blogPosts = [
        {
            img: BlogImg1,
            title: "Man in Red Plaid Shirt Talking on Phone Terrace",
            text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative...",
            date: "Nov 29, 2019",
            author: "Admin",
            comments: "10"
        },
        {
            img: BlogImg2,
            title: "Woman in White Sweater Working on Laptop",
            text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative...",
            date: "Dec 5, 2019",
            author: "Admin",
            comments: "15"
        },
        {
            img: BlogImg3,
            title: "City View from the Top of a Building",
            text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative...",
            date: "Dec 10, 2019",
            author: "Admin",
            comments: "8"
        }
    ];

    return (
        <div className='flex flex-col justify-center items-center py-24 gap-6 bg-neutralSilver px-14'>
            <div>
                {blogPosts.map((post, index) => (
                    <div key={index}>
                        <img src={post.img} alt='' className='w-full mb-10 rounded-xl' />
                        <div className='flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-12 mb-4'>
                            <div className='flex flex-row justify-start items-center gap-1'>
                                <CalendarCheckIcon className='text-brandPrimary' />
                                <p>{post.date}</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-1'>
                                <UserIcon className='text-brandPrimary' />
                                <p>{post.author}</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-1'>
                                <p className='text-brandPrimary'>{post.comments}</p>
                                <p>Comments</p>
                            </div>
                        </div>
                        <h2 className='text-[18px] sm:text-[42px] text-black duration-300 hover:text-brandPrimary font-semibold text-start mb-3'>{post.title}</h2>
                        <p className='text-[13px] sm:text-[16px] text-neutralGrey text-start mb-8'>{post.text}</p>
                        <button className='py-2 sm:py-4 px-3 sm:px-12 bg-neutralDGrey duration-300 hover:bg-brandPrimary rounded-full text-white mb-20 hover:translate-y-[-2px]'>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogBody