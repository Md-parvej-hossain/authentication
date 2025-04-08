import React from 'react';
import { Link, NavLink } from 'react-router';
import '../../index.css';
const Nevber = () => {
  const navber = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink
          to={'/contact'}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contect
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar glass shadow-sm mx-auto w-full fixed ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img
                className="w-8 "
                src="https://img.icons8.com/?size=100&id=120374&format=png"
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-none z-1 mt-3 w-52 p-2 shadow"
            >
              {navber}
            </ul>
          </div>
          <Link to={'/'} className="text-xl font-bold">
            Md Parvej
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navber}</ul>
        </div>
        <div className="navbar-end">
          <Link to="login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nevber;
