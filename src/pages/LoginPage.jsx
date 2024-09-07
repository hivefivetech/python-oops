import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const API_URL = "https://backend.srv560349.hstgr.cloud/"
function Login(set_token) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = React.useState(false);

    const signIn = async (e) => {

        e.preventDefault();
        try {
            setOpen(true);
            await axios.post(API_URL + 'signin_account',
                { email: email, password: password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            ).then((response) => {
                console.log('Response Data:', response.data);
                localStorage.setItem('tokenAiRemovals', JSON.stringify(response.data));
                set_token(response.data);
                setOpen(false)
                window.location.href = '/';
            }).
                catch((error) => {
                    console.error('Error Data:', error.data);
                    setOpen(false);
                });
        } catch (error) {
            console.error(error);
            setOpen(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Card className="w-full max-w-xl px-0 sm:px-8 py-8 space-y-6 bg-white shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-center text-gray-900">
                        Welcome Back
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
                            <Input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 border-gray-300 rounded-md focus:ring-gray-600 focus:border-gray-600"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
                            <Input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 border-gray-300 rounded-md focus:ring-gray-600 focus:border-gray-600"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between">
                            <label className="inline-flex items-center text-sm text-gray-600">
                                <input type="checkbox" className="w-4 h-4 text-gray-600 border-gray-300 rounded" />
                                <span className="ml-2">Remember me</span>
                            </label>
                            {/* <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                Forgot password?
                            </a> */}
                        </div>
                        <Button
                            type="submit"
                            onClick={signIn} 
                            className="w-full py-2 text-white bg-gray-900 hover:bg-gray-700 rounded-md"
                        >
                            Sign In
                        </Button>
                    </div>
                </CardContent>
                {/* <CardFooter className="text-gray-600 flex flow-row justify-start items-start gap-2 flex-wrap">
                    <p>
                        Don’t have an account?
                    </p>
                    <a href="#" className="text-gray-900 font-semibold duration-300 hover:scale-105 hover:text-gray-700">
                        Sign up
                    </a>
                </CardFooter> */}
            </Card>
        </div>
    );
}

export default Login;
