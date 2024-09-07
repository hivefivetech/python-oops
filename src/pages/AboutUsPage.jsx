// src/pages/MainAboutUs.jsx
import React from 'react';
import Aboutus from '@/componentsProject/Aboutus';
import AboutusBodyFirstSection from '@/componentsProject/AboutusBodyFirstSection';
import AboutusBodySecondSection from '@/componentsProject/AboutusBodySecondSection';
import Navbar from '@/componentsProject/Navbar';
import Footer from '@/componentsProject/Footer';

function MainAboutUs({ user_details, set_token }) {
    return (
        <>
            <Navbar user_details={user_details} set_token={set_token} />
            <Aboutus />
            <AboutusBodyFirstSection />
            <AboutusBodySecondSection />
            <Footer />
        </>
    );
}

export default MainAboutUs;
