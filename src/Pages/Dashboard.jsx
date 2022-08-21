import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

const Dashboard = () => {
    const [error, setError] = useState("");
    // const { signout } = useAuth();
    const { currentUser, signout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        // setError(""); 

        try {
            await signout();
            navigate('/')
        } catch {
            setError("Something went wrong");
        }
    }

  return (
    
    <div className="mx-auto mt-10 flex-col justify-center lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <h1 className='text-5xl font-bold text-center text-orange-400'>Dashboard</h1>
        <p className='py-2 text-3xl font-bold text-center mt-48 text-pink-700'>
            Welcome to your dashboard
        </p>
        {error && <p className="bg-red-300 text-red-600 w-96 m-auto font-bold text-center">{error}</p>}
        <p className='py-2 font-semibold text-center'>
            You can use this page to manage your account
        </p>
        <p className='py-2 font-bold text-center'>
            User Email: { currentUser && currentUser.email }
        </p>
        {/* <Link to='/update' className='text-center'>
            <button className='bg-blue-500 m-auto mb-5 flex items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleLogout}>
                Update Profile
            </button>
        </Link> */}

        <div className='flex items-center'>
            <button onClick={handleLogout} className='bg-blue-500 w-96 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                Sign Out
            </button>
        </div>
    </div>
  )
}

export default Dashboard