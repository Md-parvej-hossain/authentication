import { useContext } from 'react';
import { AuthContext } from '../layouts/MainLayout';

function App() {
  const contextValue = useContext(AuthContext);
  const {
    handaleGoogleLogin,
    handaleTwoitter,
    handleGithubLogin,
    user,
    logOut,
  } = contextValue;
  return (
    <>
      <div className="text-center py-42 ">
        <h1 className="text-5xl py-10">Hello Welcome!</h1>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
        <button className="btn btn-error">{user?.displayName}</button>
      </div>

      <div className="text-center items-center">
        <button
          onClick={handaleGoogleLogin}
          className="text-3xl font-bold btn btn-ghost py-6 bg-sky-500"
        >
          Google Login
        </button>
      </div>
      <div className="text-center items-center mt-10">
        <button
          onClick={handleGithubLogin}
          className="text-3xl font-bold btn btn-ghost py-6 bg-sky-500"
        >
          Github Login
        </button>
      </div>
      <div className="text-center items-center py-10">
        <button
          onClick={handaleTwoitter}
          className="text-3xl font-bold btn btn-ghost py-6 bg-sky-500"
        >
          Twoitter Login
        </button>
      </div>
      <div className="text-center items-center py-10">
        <button
          onClick={logOut}
          className="text-3xl font-bold btn btn-ghost py-6 bg-sky-500"
        >
          Log Out
        </button>
      </div>
    </>
  );
}
export default App;
