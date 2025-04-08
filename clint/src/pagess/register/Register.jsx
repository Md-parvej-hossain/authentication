import { useContext } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router';
import { AuthContext } from '../../layouts/MainLayout';
const Register = () => {
  // const { handaleSignin } = useContext(AuthContext);
  const handaleSubmite = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(email, password);
    handaleSignin(email, password);
  };
  return (
    <div className="grid lg:grid-cols-1 w-7/12 mx-auto">
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-5">
        <form onSubmit={handaleSubmite} className="card-body">
          <div className="flex justify-center text-2xl font-bold">
            <h1>Register Now !</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Enter a photo URl"
              name="photo"
              className="input input-bordered"
              required
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
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
            <button className="btn btn-primary rounded-none">Register</button>
          </div>
        </form>
        <div className="mb-4">
          <h1 className="flex justify-center text-2xl">
            Dont’t Have An Account ?
            <NavLink
              className={'text-red-500 border-b-2 ml-2 border-red-600'}
              to={'/login'}
            >
              Login
            </NavLink>
          </h1>
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

export default Register;
