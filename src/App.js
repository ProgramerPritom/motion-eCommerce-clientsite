
import './App.css';
import Navbar from './Component/Sharer/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './Component/Home/Home';
import Footer from './Component/Sharer/Footer';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
