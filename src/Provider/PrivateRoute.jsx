import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <progress className='progress w-56'></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;