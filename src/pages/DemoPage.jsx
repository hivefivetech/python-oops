// src/pages/MainDemo.jsx
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';
import SoftwareDemo from '@/componentsProject/SoftwareDemo';
import SoftwareDemoFirstSection from '@/componentsProject/SoftwareDemoFirstSection';
import React from 'react';

function MainDemo({ user_details, set_token }) {
    return (
        <>
            <Navbar user_details={user_details} set_token={set_token} />
            <SoftwareDemo />
            <SoftwareDemoFirstSection />
            <Footer />
        </>
    );
}

export default MainDemo;
