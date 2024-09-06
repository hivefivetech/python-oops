import { useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    AddressElement,
} from "@stripe/react-stripe-js";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const API_URL = "https://backend.srv560349.hstgr.cloud/"

export default function CheckoutForm({ price_id, plan, purchase_type = "subscription"}) {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [priceId, setPriceId] = useState(price_id);
    const [addressElement, setAddressElement] = useState();

    // const [priceId, setPriceId] = useState("");

    const createSubscription = async (e) => {
        try {

            e.preventDefault();
            
            if (!stripe || !elements) {
                alert("Please complete all the fields required");
                return;
            }
            if(!addressElement && !addressElement.complete) {
                alert("Please complete all the fields required");
                return;
            }   

            setIsLoading(true);
            // create a payment method
            const paymentMethod = await stripe?.createPaymentMethod({
                type: "card",
                card: elements?.getElement(CardNumberElement),
                billing_details: {
                    name: addressElement?.value?.name,
                    email: email,
                    address: addressElement?.value?.address,
                },
            });

            // call the backend to create subscription
            await fetch(API_URL + "create_subscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    paymentMethod: paymentMethod?.paymentMethod?.id,
                    cardName: addressElement?.value?.name,
                    customerName: name,
                    customerAddress: addressElement?.value?.address,
                    email: email,
                    priceId: priceId,
                    accountPassword: password,
                    purchaseType: purchase_type,
                    planType: plan,
                }),
            }).then((res) => res.json()).then( async (response) => {
                console.log(response)
                const confirmPayment = await stripe?.confirmCardPayment(
                    response.clientSecret
                );
    
                if (confirmPayment?.error) {
                    alert(confirmPayment.error.message);
                    console.log(confirmPayment.error.message)
                } else {
                    alert("Success! Check your email for the invoice.");
                }
                setIsLoading(false);
            }).
            catch((err) => {
                console.log(err)
                setIsLoading(false);
            });
            

            
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const cardStyle = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
        showIcon: true
    };
    const addressOptions = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
        mode: "billing",
        
    };

    // useEffect(() => {
    //     // if (!stripe) {
    //     //     return;
    //     // }

    //     // const clientSecret = new URLSearchParams(window.location.search).get(
    //     //     "payment_intent_client_secret"
    //     // );

    //     // if (!clientSecret) {
    //     //     return;
    //     // }

    //     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //         switch (paymentIntent.status) {
    //             case "succeeded":
    //                 setMessage("Payment succeeded!");
    //                 break;
    //             case "processing":
    //                 setMessage("Your payment is processing.");
    //                 break;
    //             case "requires_payment_method":
    //                 setMessage("Your payment was not successful, please try again.");
    //                 break;
    //             default:
    //                 setMessage("Something went wrong.");
    //                 break;
    //         }
    //     });
    // }, [stripe]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!stripe || !elements) {
    //         return;
    //     }
    //     console.log(e);
    //     return
    //     setIsLoading(true);

    //     const { error } = await stripe.confirmPayment({
    //         elements,
    //         confirmParams: {
    //             // Update with your URL
    //             return_url: `${process.env.REACT_APP_FRONTEND_URL}`,
    //         },

    //     });

    //     if (error.type === "card_error" || error.type === "validation_error") {
    //         setMessage(error.message);
    //     } else {
    //         setMessage("An unexpected error occurred.");
    //     }

    //     setIsLoading(false);
    // };

    // const paymentElementOptions = {
    //     layout: "tabs"
    // }

    return (
        // <form id="payment-form" onSubmit={handleSubmit}>
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <form id="payment-form" onSubmit={createSubscription} className="w-[100%] border-none duration-300 hover:shadow-xl">

                <h1 className="text-[#2f1c6a] font-semibold text-[40px] leading-[48px] text-center">
                    You’re almost there! Complete your order
                </h1>

                <div className="flex flex-row justify-center items-center gap-2 mt-4 mb-6">
                    <p className="text-[#2f1c6a] font-normal text-[16px]">
                        Selected Plan:
                    </p>

                    <p className="text-[#2f1c6a] font-semibold text-[18px] text-">
                        {plan}
                    </p>
                </div>

                <h1 className="text-[#2f1c6a] font-semibold text-[30px] text-center">
                    1. Create your account
                </h1>

                <div className="w-full flex justify-center items-center">
                    <div className="p-6 flex flex-col justify-center items-center w-[100%] sm:w-[75%] lg:w-[50%] text-center gap-4">
                        <input
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm"
                            required={true}
                        />
                        <input
                            placeholder="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm"
                            required={true}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm"
                            required={true}
                        />
                    </div>
                </div>

                {/* <LinkAuthenticationElement
                    id="link-authentication-element"
                    onChange={(e) => setEmail(e.target.value)}
                /> */}
                {/* <PaymentElement id="payment-element" options={paymentElementOptions} /> */}

                <h1 className="text-[#2f1c6a] font-semibold text-[30px] text-center mt-2">
                    2. Payment
                </h1>

                <div className="flex justify-center items-center w-full">
                    <div className="space-y-4 w-[100%] sm:w-[75%] lg:w-[50%] p-6 rounded-lg bg-white mt-4">
                        <h2 className="text-lg font-semibold mb-4">Card Information</h2>

                        {/* Cardholder Name */}
                        {/* <div className="flex flex-col">
                            <label htmlFor="cardholder-name" className="text-sm font-medium text-gray-700">
                                Cardholder Name
                            </label>
                            <input
                                id="cardholder-name"
                                placeholder="Cardholder Name"
                                type="text"
                                className="mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div> */}

                        {/* Card Number */}
                        <div className="mb-4 flex flex-col justify-start items-start gap-1">
                            {/* <text className="text-sm font-medium text-gray-700">
                                Address Details
                            </text> */}
                            <AddressElement  options={addressOptions} id="customer-address" className="w-full bg-white " placeholder="1234 1234 1234 1234" 
                            onChange={(event)=>{setAddressElement(event)}}
                            />
                        </div>
                        
                        {/* Card Number */}
                        <div className="mb-4 flex flex-col justify-start items-start gap-1">
                            {/* <text className="text-sm font-medium text-gray-700"> */}
                            <text className="text-sm text-gray-600">
                                Card Details
                            </text>
                            <CardNumberElement showIcon={true} id="card-number" options={cardStyle} className="w-full bg-white p-3 border rounded" placeholder="1234 1234 1234 1234" />
                        </div>

                        {/* <div className="mb-4">
                            <text className="text-sm font-medium text-gray-700">
                                Card Details
                            </text>
                            <CardElement showIcon={true} id="card-element" options={cardStyle} className="w-full bg-white p-3 mt-1 border rounded" placeholder="1234 1234 1234 1234" />
                        </div> */}

                        {/* Expiration Date and CVC */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="flex-1 flex flex-col justify-start items-start gap-1">
                                {/* <text className="text-sm font-medium text-gray-700"> */}
                                <text className="text-sm text-gray-600">
                                    Expiry
                                </text>
                                <CardExpiryElement id="card-expiry" options={cardStyle} className="w-full bg-white p-3 border rounded" placeholder="MM/YY" />
                            </div>

                            <div className="flex-1 flex flex-col justify-start items-start gap-1">
                                {/* <text className="text-sm font-medium text-gray-700"> */}
                                <text className="text-sm text-gray-600">
                                    Security Code
                                </text>
                                <CardCvcElement id="card-cvc" options={cardStyle} className="w-full bg-white p-3 border rounded" placeholder="CVC" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full mt-10">
                    <button disabled={isLoading || !stripe || !elements} id="submit" className="flex justify-center items-center py-2 px-2 bg-black w-[50%] duration-300 hover:bg-[#424242] hover:translate-y-[-2px] text-white">
                        <span id="button-text">
                            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                        </span>
                    </button>
                </div>
            </form>
        </>
    );
}