import React from "react";
import google from "../../assets/google-logo-9808.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center  ">
            <h1 className="text-5xl font-bold ">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  <span className="  cursor-pointer">
                    
                    <img className="h-10 w-10" src={google} alt="" />
                  </span>
                  <span className=" cursor-pointer">
                    
                    <img className="h-12 w-12" src={github} alt="" />
                  </span>
                </div>
              </div>

              <p>
                Don’t have an account yet?
                <Link to="/register" className="link link-color">
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
