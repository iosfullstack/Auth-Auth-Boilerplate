import React from 'react'
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../context/Authcontext";

const ForgotPassword = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true)
            await resetPassword(emailRef.current.value);
            setMessage("Check your email for a reset link");
        } catch {
            // console.log(error);
            setError("Unable to reset password");
        }
        setLoading(false);   
    }

    
  return (
    <div className="mx-auto mt-10 flex-col justify-center lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <h1 className="text-3xl font-bold text-center text-blue-700">Password Reset</h1>
        <p className="py-2 text-center text-pink-500">
            Don't have an account?<Link to="/signup" className="underline text-blue-600">Sign up</Link>
        </p>
        {error && <p className="bg-red-300 text-red-600 w-96 m-auto font-bold text-center">{error}</p>}
        {message && <p className="bg-green-300 text-green-600 w-96 m-auto font-bold text-center">{message}</p>}
        <form onSubmit={handleSubmit}  className="bg-red-400 shadow-md rounded w-2/4 m-auto px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                    Email Address
                </label>
                <input  ref={emailRef} className="shadow appearance-none border rounded w-full 
                py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" type="email" placeholder="joedoe@example.com" />
            </div>
            <div onClick={handleSubmit} disabled={loading} className="flex items-center justify-between">
                <button className="bg-blue-500 w-96 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                    Reset Password
                </button>
            </div>
        </form>
        <div className="flex items-center m-auto">
            <Link to="/" className="text-blue-500 m-auto italic hover:text-blue-700">
                Login
            </Link>
        </div>
    </div>
  )
}

export default ForgotPassword