// src/pages/MainPricing.jsx
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';
import Pricing from '@/componentsProject/Pricing';
import PricingBody from '@/componentsProject/PricingBody';
import React from 'react';

function MainPricing({ user_details, set_token }) {
    return (
        <>
            <Navbar user_details={user_details} set_token={set_token} />
            <Pricing />
            <PricingBody />
            <Footer />
        </>
    );
}

export default MainPricing;
