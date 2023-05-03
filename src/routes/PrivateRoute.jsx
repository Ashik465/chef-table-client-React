import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, NavigationType, useLocation } from 'react-router-dom';
import LoadingSpinner from '../loader/LoadingSpinner';

const PrivateRoute = ({children}) => {

    const{user,loader} =useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loader){
        return <LoadingSpinner></LoadingSpinner>
    }
   if(user){
        return children ;
    }
    return <Navigate to='/login' state={{from:location}} replace  ></Navigate>
    
};

export default PrivateRoute;