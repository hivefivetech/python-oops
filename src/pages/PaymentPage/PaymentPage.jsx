import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";

import CheckoutForm from "../../componentsProject/CheckoutForm";
import "./PaymentPage.css";
import { useLocation } from "react-router-dom";
import Navbar from "@/componentsProject/Navbar";
import Footer from "@/componentsProject/Footer";

const PaymentPage = () => {

    const props = useLocation()?.state;
    // const [clientSecret, setClientSecret] = useState("");
    // Parse publishable key here
    const stripePromise = loadStripe('pk_live_51OgjlwDwjbcVhxIp132KCCIgmGzZgM29q1LEiDZCe31A4XX8uQbkTHh40BuYEcyO2SMhF1WeHxZ4YAPffR5qx4rl00LOqa045u');

    // const loadData = async () => {
    //     // Send a post request to flask to the route /create-payment-intent
    //     // Add a payload to the request like this:
    //     //{
    //     //items: [{ id: "Premium" }],
    //     //customer: user_uuid
    //     //}
    //     // I am providing a user_uuid, so I can identify who is making the payment later 
    //     // Set client secret like this setClientSecret(response.clientSecret);
    // };

    // useEffect(() => {
    //     loadData();
    // }, [])

    const appearance = {
        theme: 'night',
    };
    const options = {
        // clientSecret,
        appearance,
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center py-24 gap-6 bg-neutralSilver px-3 sm:px-14 pt-32'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price_id={props?.priceId} purchase_type={props?.purchase_type} plan={props?.plan} />
                </Elements>
            </div>
            <Footer />
        </div>
    );
};

export default PaymentPage;