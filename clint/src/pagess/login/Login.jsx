import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router';

const Login = () => {
  return (
    <div className="grid lg:grid-cols-1 w-7/12 mx-auto">
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-5">
        <form className="card-body">
          <div className="flex justify-center text-2xl font-bold">
            <h1>Login Now !</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-none">Login</button>
          </div>
        </form>
        <div>
          <h1 className="flex justify-center text-2xl">
            Dont’t Have An Account ?
            <NavLink
              className={'text-red-500 border-b-2 ml-2 border-red-600'}
              to={'/register'}
            >
              Register
            </NavLink>
          </h1>
          <div className="divider divide-gray-100 text-[#6A6F77]">
            Other log in options
          </div>
          <div className="flex justify-center space-x-10 py-2 my-2 mx-8 text-4xl border-2 border-gray-500 ">
            <FcGoogle />
            <FaGithub />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
