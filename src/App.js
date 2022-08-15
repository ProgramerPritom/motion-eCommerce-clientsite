
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './Component/Sharer/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './Component/Home/Home';
import Footer from './Component/Sharer/Footer';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp';
import RequireAuth from './Component/Sharer/RequireAuth';
import Dashboard from './Component/Dashboard/Dashboard';
import UserProfile from './Component/Dashboard/UserProfile';
import UserProducts from './Component/Dashboard/UserProducts';
import AllProducts from './Component/Home/AllProducts';
import CheckOut from './Component/CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<AllProducts></AllProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='profile' element={<UserProfile></UserProfile>}></Route>
          <Route path='userProducts' element={<UserProducts></UserProducts>}></Route>
         
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
