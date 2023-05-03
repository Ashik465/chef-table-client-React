import React, {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Register = () => {
    const {createEmailUser,setLoader}=useContext(AuthContext)
    const[error,setError] =useState('')
    const navigate = useNavigate();
    const location =useLocation()

    const from = location?.state?.pathname || '/'
const auth =getAuth(app)
   
    //email signup
  const  handleEmailSignUp =(e)=>{
    e.preventDefault()
    const form = e.target
    const email= form.email.value 
    const password = form.password.value
    const name = form.name.value
    const photoURL = form.photoURL.value

    
     if( email ==='' || password ==='') {
        setError('email and password can not be empty')
        return 
    } else if(password.length<6){
        setError('password should be 6 character long')
        return 
    } 
    else{   
        setError('')
         
    }

    createEmailUser(email,password,
        )
    .then((result) => {
       
        const loggedUser = result.user;
        updateProfile(auth.currentUser, {
         
         
          displayName:name , photoURL: photoURL
        }).then(() => {
          
          setLoader(true)
        }).catch((error) => {
          // An error occurred
          // ...
        });
        form.reset()
        navigate(from, { replace: true });
        console.log(loggedUser)
        
        
      })
      .catch((error) => {
        console.log(error)
         setError(error.message) 
        
      });


  }

  
  

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center  ">
              <h1 className="text-5xl font-bold ">Sign-Up now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleEmailSignUp} className="card-body">
             {error &&  <p className='mb-3 text-red-600'> {error}  </p>}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name='name'
                    type="text"
                    placeholder="Name"
                    className="input input-bordered" 
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  name='email'
                    type="email"
                    placeholder="email"
                    className="input input-bordered" 
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Password</span>
                  </label>
                  <input
                    name='password'
                  
                    type="password"
                    placeholder="password"
                    className="input input-bordered" 
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo-URL</span>
                  </label>
                  <input

                    name='photoURL'
                    type="text"
                    placeholder="Photo-URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-main mb-3">Sign-Up</button>
                </div>
  
                
  
                <p>
                  Already have an account! 
                  <Link to="/login" className="link link-color">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;