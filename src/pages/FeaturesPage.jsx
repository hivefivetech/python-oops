// src/pages/MainFeatures.jsx
import Features from '@/componentsProject/Features';
import FeaturesFirstSection from '@/componentsProject/FeaturesFirstSection';
import FeaturesSecondSection from '@/componentsProject/FeaturesSecondSection';
import FeaturesThirdSection from '@/componentsProject/FeaturesThirdSection';
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';
import React from 'react';

function MainFeatures() {
    return (
        <>
            <Navbar />
            <Features />
            <FeaturesFirstSection />
            <FeaturesSecondSection />
            <FeaturesThirdSection />
            <Footer />
        </>
    );
}

export default MainFeatures;
