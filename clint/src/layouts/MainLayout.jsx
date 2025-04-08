import { Outlet } from 'react-router';
import Navber from '../components/nevber/Nevber.jsx';
import Footer from '../components/footer/Footer.jsx';
import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import auth from '../firebase/firbase.config.js';
export const AuthContext = createContext();
const MainLayout = () => {
  const [user, setUser] = useState(null);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const twitterAuthProvider = new TwitterAuthProvider();
  // google login
  const handaleGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider).then(resuld =>
      setUser(resuld.user)
    );
  };
  // github ligin
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubAuthProvider).then(resuld =>
      setUser(resuld.user)
    );
  };
  // towitter login
  const handaleTwoitter = () => {
    signInWithPopup(auth, twitterAuthProvider).then(resuld =>
      setUser(resuld.user)
    );
  };
  // password login
  const handaleSignin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(resuld =>
      console.log(resuld.user)
    );
  };
  // logout hear
  const logOut = () => {
    signOut(auth).then(res => console.log(res));
  };

  useEffect(() => {
    console.log('user State------>', user);
  }, [user]);
  // ovser vare hear ,set interbal
  useEffect(() => {
    const unSubscrip = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unSubscrip();
  }, []);

  const authData = {
    handaleGoogleLogin,
    handaleTwoitter,
    handleGithubLogin,
    handaleSignin,
    logOut,
    user,
    setUser,
  };
  return (
    <div>
      <Navber />
      <div className="min-h-screen">
        <AuthContext.Provider value={authData}>
          <Outlet />
        </AuthContext.Provider>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
