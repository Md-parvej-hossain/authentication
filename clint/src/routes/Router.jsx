import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pagess/Home/Home';
import About from '../pagess/about/About';
import Contact from '../pagess/contact/Contact';
import Login from '../pagess/login/Login.Jsx';
import Register from '../pagess/register/Register';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>
      </Route>

      {/* <Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
      <Route>
        <Route path="/register" element={<Register />}></Route>
      </Route> */}
    </Routes>
  );
};

export default Router;
