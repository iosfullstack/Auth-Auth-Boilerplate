import React from 'react'
import { useAuth } from './Authcontext';
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to='/'/>
    }
    return children
}



export default PrivateRoute