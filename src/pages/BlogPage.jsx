// src/pages/MainBlog.jsx
import BlogBody from '@/componentsProject/BlogBody';
import BlogMain from '@/componentsProject/BlogMain';
import React from 'react';
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';

function MainBlog({ user_details, set_token }) {
    return (
        <>
            <Navbar user_details={user_details} set_token={set_token} />
            <BlogMain />
            <BlogBody />
            <Footer />
        </>
    );
}

export default MainBlog;
