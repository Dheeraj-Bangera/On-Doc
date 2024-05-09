
import Signup from "./components/Pages/signup/doc/Signup";
import SignupP from "./components/Pages/signup/patient/Signup";
import Login from "./components/Pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import Footer from "./components/Footer"
import Choices from "./components/Pages/signup/choices/Choices";
import Main from "./components/Pages/feeds/patient/Main"
import Profile from "./components/Pages/feeds/patient/user/Profile"
import NotFound from "./components/NotFound";

function App() {



  return (
     <div className="h-full w-full">
      <Routes>
     <Route path="/" element={<div>{<Home />}</div>} />
        <Route path="/Login" element={<div>{<Login />}</div>} />
        <Route path="/role" element={<div>{<Choices/>}</div>} />
        <Route path="/doc/signup" element={<div>{<Signup/>}</div>} />
        <Route path="/patient/signup" element={<div>{<SignupP/>}</div>} />
        <Route path="/patient/main" element={<div>{<Main/>}</div>} />
        {/* <Route path="/book-appointment" element={<div>{<Appointment/>}</div>} /> */}
        {/* <Route path="/symptom-analysis" element={<div>{<Symptom/>}</div>} /> */}
        {/* <Route path="/medicine-info" element={<div>{<Chatbot/>}</div>} /> */}
        {/* <Route path="/bmi-calculator" element={<div>{<BMI/>}</div>} /> */}
        {/* <Route path="/Chat" element={<div>{<Chat/>}</div>} /> */}


        <Route path="/user/:activepage" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
        

      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
