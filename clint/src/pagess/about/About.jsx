import React, { useContext } from 'react';
import { AuthContext } from '../../layouts/MainLayout';

const About = () => {
  const contextValue = useContext(AuthContext);
  const { handaleGoogleLogin, user } = contextValue;
  console.log(contextValue);
  return (
    <div className="text-center py-42 ">
      <h1>This is a About Pages {user?.displayName}</h1>
      <h1>This is a About Pages {user?.email}</h1>
      <div className="text-center items-center">
        <button
          onClick={handaleGoogleLogin}
          className="text-3xl font-bold btn btn-ghost py-6 bg-sky-500"
        >
          Google Login
        </button>
      </div>
    </div>
  );
};

export default About;
