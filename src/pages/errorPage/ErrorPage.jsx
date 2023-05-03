import React from 'react';
import error from '../../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className=' text-center'>
            <div className='text-7xl font-bold'>This is The error page</div>
<div className='  flex justify-center'><img src={error} alt="" /></div>
            
        </div>
    );
};

export default ErrorPage;