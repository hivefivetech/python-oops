// src/pages/MainBlog.jsx
import BlogBody from '@/componentsProject/BlogBody';
import BlogMain from '@/componentsProject/BlogMain';
import React from 'react';
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';

function MainBlog() {
    return (
        <>
            <Navbar />
            <BlogMain />
            <BlogBody />
            <Footer />
        </>
    );
}

export default MainBlog;
