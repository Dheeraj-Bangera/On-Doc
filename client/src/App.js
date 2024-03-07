
import Signup from "./components/Pages/signup/Signup";
import Login from "./components/Pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import Footer from "./components/Footer"

function App() {



  return (
     <div className="h-full w-full">
      <Routes>
     <Route path="/" element={<div>{<Home />}</div>} />
        <Route path="/Login" element={<div>{<Login />}</div>} />
        <Route path="/Signup" element={<div>{<Signup />}</div>} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
