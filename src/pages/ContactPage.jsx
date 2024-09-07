// src/pages/MainContact.jsx
import Contact from '@/componentsProject/Contact';
import ContactBody from '@/componentsProject/ContactBody';
import Footer from '@/componentsProject/Footer';
import Navbar from '@/componentsProject/Navbar';
import React from 'react';

function MainContact({ user_details, set_token }) {
    return (
        <>
            <Navbar user_details={user_details} set_token={set_token} />
            <Contact />
            <ContactBody />
            <Footer />
        </>
    );
}

export default MainContact;
