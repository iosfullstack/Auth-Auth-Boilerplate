import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../context/Authcontext";



const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard");
        } catch {

            // console.log(error);
            setError("Incorrect email or password");
        }
        setLoading(false);   
    }

    
  return (
    <div className="mx-auto mt-10 flex-col justify-center lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <h1 className="text-3xl font-bold text-center text-blue-700">Sign In to your account</h1>
        <p className="py-2 text-center text-pink-500">
            Don't have an account?<Link to="/signup" className="underline text-blue-600">Sign up</Link>
        </p>
        {error && <p className="bg-red-300 text-red-600 w-96 mb-7 m-auto font-bold text-center">{error}</p>}
        <form onSubmit={handleSubmit}  className="bg-red-400 shadow-md rounded w-2/4 m-auto px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                    Email Address
                </label>
                <input  ref={emailRef} className="required:border-red-500 shadow appearance-none border rounded w-full 
                py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" type="email" placeholder="joedoe@example.com" />
            </div>
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input  ref={passwordRef} className="shadow appearance-none border rounded w-full
                py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************" />
                <p className="text-gray-600 text-xs italic">
                    Make it as secure as possible
                </p>
            </div>
            <div onClick={handleSubmit} disabled={loading} className="flex items-center justify-between">
                <button className="bg-blue-500 w-96 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                    Sign In
                </button>
            </div>
        </form>
        <div className="flex items-center m-auto">
            <Link to="/forgot-password" className="text-blue-500 m-auto italic hover:text-blue-700">
                Forgot Password?
            </Link>
        </div>
    </div>
  )
}

export default Login;