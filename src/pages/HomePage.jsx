// src/pages/MainContent.jsx
// import React from 'react';
import Services from '@/componentsProject/Services';
import ObjectDetectionApp from '@/componentsProject/ObjectDetectionApp';
import WhyCV from '@/componentsProject/WhyCV';
import Testimonial from '@/componentsProject/Testimonial';
import Home from '@/componentsProject/Home';
import Navbar from '@/componentsProject/Navbar';
import Footer from '@/componentsProject/Footer';

function MainContent({ user_details, set_token }) {
    return (
        <>
            <Navbar user_details={user_details} set_token={set_token} />
            <Home user_details={user_details} />
            <Services />
            <ObjectDetectionApp />
            <WhyCV />
            <Testimonial />
            <Footer />
        </>
    );
}

export default MainContent;
