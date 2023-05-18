import React, { useContext, useState } from "react";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
// import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const { googleLogIn, githubLogIn,signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error ,setError] =useState('')
  const location =useLocation()

  const from = location.state?.from?.pathname || "/";
  

  // console.log(from)
  
  //email log in 

 const  handleEmailLogin =(event)=>{

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        // toast.success('Log-in successful');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'log-in successful',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

      

 }
  
  
  
  
  
  //git-hub log in

  const handleGithubLogin = () => {
    githubLogIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // toast.success('Log-in successful');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'log-in successful',
          showConfirmButton: false,
          timer: 1500
        })
        

        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.log(error);
      });

      
  };

  //google log in
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // toast.success('Log-in successful');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'log-in successful',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.log(error);
      });
     
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center  ">
            <h1 className="text-5xl font-bold ">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleEmailLogin} className="card-body">
            {error &&  <p className='mb-3 text-red-600'> {error}  </p>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name='email'
                  type="text"
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
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-main mb-3">Login</button>
                {/* <Toaster /> */}
              </div>

              <div className=" flex  flex-col gap-2">
                <div className="relative py-2">
                  <div className=" absolute inset-0 flex items-center justify-center">
                    <div className=" w-full border-b border-gray-300"></div>
                    <div className=" absolute inset-0 flex justify-center items-center">
                      <span className="bg-white px-4 text-sm text-gray-500">
                        or login with
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-center items-center gap-4">
                  <span
                    onClick={handleGoogleLogin}
                    className="  cursor-pointer"
                  >
                    <img className="h-10 w-10" src={google} alt="" />
                  </span>
                  <span onClick={handleGithubLogin} className=" cursor-pointer">
                    <img className="h-12 w-12" src={github} alt="" />
                  </span>
                </div>
              </div>

              <p>
                Don’t have an account yet?
                <Link to="/register" state={location?.state?.from} className="link link-color">
                  Sign-Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
