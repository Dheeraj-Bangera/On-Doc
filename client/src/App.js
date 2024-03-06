import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Pages/home/Home";
import { NavbarDefault } from "./component/Navbar";
import Login from "./component/login/Login";
import Signup from "./component/login/Signup";

function App() {



  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<div>{<Home />}</div>} />
        <Route path="/Login" element={<div>{<Login />}</div>} />
        <Route path="/Signup" element={<div>{<Signup />}</div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
