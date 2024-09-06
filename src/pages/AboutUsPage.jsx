// src/pages/MainAboutUs.jsx
import React from 'react';
import Aboutus from '@/componentsProject/Aboutus';
import AboutusBodyFirstSection from '@/componentsProject/AboutusBodyFirstSection';
import AboutusBodySecondSection from '@/componentsProject/AboutusBodySecondSection';
import Navbar from '@/componentsProject/Navbar';
import Footer from '@/componentsProject/Footer';

function MainAboutUs() {
    return (
        <>
            <Navbar />
            <Aboutus />
            <AboutusBodyFirstSection />
            <AboutusBodySecondSection />
            <Footer />
        </>
    );
}

export default MainAboutUs;
