import React from 'react';

import BlogImg1 from '../assets/blogimg1.jpg';
import BlogImg2 from '../assets/blogimg2.jpg';
import { CalendarCheckIcon, UserIcon } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
        {
            img: BlogImg1,
            title: "Man in Red Plaid Shirt Talking on Phone Terrace",
            date: "Nov 29, 2019",
            author: "Admin",
            comments: "10"
        },
        {
            img: BlogImg2,
            title: "Woman in White Sweater Working on Laptop",
            date: "Dec 5, 2019",
            author: "Admin",
            comments: "15"
        },
        {
            img: BlogImg1,
            title: "City View from the Top of a Building",
            date: "Dec 10, 2019",
            author: "Admin",
            comments: "8"
        }
    ];

    return (
        <div className='p-10 sm:p-20 flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center text-center gap-4'>
                <h3 className='text-brandPrimary text-[18px] font-semibold tracking-wider'>BLOG NEWS</h3>
                <h1 className='text-neutralDGrey text-[32px] sm:text-[42px] font-semibold'>Recent Blog & News</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {blogPosts.map((post, index) => (
                        <div key={index} className='shadow-md p-4 flex flex-col gap-5 duration-300 hover:translate-y-[-3px] hover:shadow-2xl rounded-md'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={post.img} alt={post.title} className='w-full' />
                            </div>
                            <div className='flex justify-start items-start'>
                                <h2 className='text-[18px] sm:text-[22px] text-neutralDGrey font-semibold text-start sm:text-center'>{post.title}</h2>
                            </div>
                            <div className='flex flex-col xl:flex-row justify-around items-start md:items-center gap-4 xl:gap-0'>
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
                            <div className='flex justify-start sm:justify-center items-start sm:items-center'>
                                <button className='py-2 sm:py-3 px-3 sm:px-6 bg-brandPrimary duration-300 rounded-full text-white hover:bg-neutralDGrey hover:translate-y-[-2px]'>CHECK IT OUT</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
