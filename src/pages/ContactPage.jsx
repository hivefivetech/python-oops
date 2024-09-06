// src/pages/MainContact.jsx
import Contact from '@/componentsProject/Contact';
import ContactBody from '@/componentsProject/ContactBody';
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';
import React from 'react';

function MainContact() {
    return (
        <>
            <Navbar />
            <Contact />
            <ContactBody />
            <Footer />
        </>
    );
}

export default MainContact;
