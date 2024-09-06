// src/pages/MainPricing.jsx
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';
import Pricing from '@/componentsProject/Pricing';
import PricingBody from '@/componentsProject/PricingBody';
import React from 'react';

function MainPricing() {
    return (
        <>
            <Navbar />
            <Pricing />
            <PricingBody />
            <Footer />
        </>
    );
}

export default MainPricing;
