import Signup from "../src/components/signup/Signup";
import Login from "../src/components/login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path="/Login" element={<div>{<Login />}</div>} />
        <Route path="/Signup" element={<div>{<Signup />}</div>} />
      </Routes>
    </div>
  );
}

export default App;
