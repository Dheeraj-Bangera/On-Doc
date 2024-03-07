import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import SingupBg from "../../assets/bg-doc.jpg"; // Adjust the path to your image

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData,
        { withCredentials: true }
      );
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        const user = response.data.user;
        const token = response.data.token;

        redirectToDashboard();
        toast("Login Successful");
      }
    } catch (error) {
      toast("Invalid Credentials");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const redirectToDashboard = () => {
    // Implement your own redirection logic
    // For example, using react-router-dom
    // history.push("/dashboard");
  };

  return (
    <div className="relative">
      <img
        src={SingupBg}
        alt="Eshway"
        className="absolute inset-0 w-full h-screen object-cover"
      />
      <div className=" relative flex items-center justify-center h-screen">
        {loading ? (
          <SyncLoader color="#36d7b7" />
        ) : (
          <div className="flex flex-col items-center justify-center bg-[#e0abb0] 
            shadow-lg lg:w-[50%] mx-auto p-12 rounded-lg">
            <form
              className="flex flex-col gap-4 items-center"
              onSubmit={(e) => handleSubmit(e)}
            >
              <h1 className="text-2xl font-bold flex items-center justify-center">
                LOGIN
              </h1>
              <Input
                type="email"
                placeholder="Enter Email"
                className="w-full md:w-96 lg:w-80 rounded-sm m-2 bg-white  text-black p-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Enter Password"
                className="w-full md:w-96 lg:w-80 rounded-sm m-2 bg-white  text-black p-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                className="bg-purple-400/20 w-[75%] sm: w-1/2 p-2 text-black font-semibold rounded-lg
                 hover:bg-purple-500/30 transition-transform transform hover:scale-105"
              >
                Submit
              </Button>
            </form>
            <Link to="/signup" className="mt-4">
              If you are a new user? <span className="underline">Sign up</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
