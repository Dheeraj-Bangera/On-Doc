import React, { useState, useRef, useEffect } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "sonner";
import { Skeleton } from "../../ui/skeleton";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import OTP from "./Otp";
import axios  from "axios";
import SingupBg from "../../../assets/bg.jpg"

const PersonalInfoForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [clicking, setClicking] = useState(false);

  const handleMouseDown = () => {
    setClicking(true);
  };

  const handleMouseUp = () => {
    setClicking(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState("");
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [matchFocus, setMatchFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, phoneNumber, email, pwd, matchPwd]);

  const [otpClick, setOtpClick] = useState(false);

  var childData = {
    name: user,
    password: pwd,
    email: email,
    mobile_no: phoneNumber,
    role:"patient"
  };
  
  const otpClickHandler = async () => {
    setLoading(true);

    try {
      // Make the OTP request
      // Replace this with your actual API call
      const otpData = {
        email: email
      }
      await axios.post("http://localhost:8080/api/auth/getotp", otpData);

      // If successful, show toast and set otpClick to true
      toast("OTP sent successfully");
      setOtpClick(true);
    } catch (error) {
      // If there is an error, handle it
      // Handle other errors here
      toast(error);
      console.error("An error occurred:", error);
    } finally {
      // Ensure loading is set to false, regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <div className="relative  overflow-hidden">
      <img src={SingupBg} alt="Eshway" className="absolute inset-0 w-full h-screen object-cover  " />
      {otpClick ? (
        <OTP signupData={childData} />
      ) : (
        <div className="">

        <div className="flex flex-col items-center justify-center relative bg-[#AEC3AE] shadow-lg lg:w-[40%]  p-9 mx-auto rounded-lg mt-4">
          {loading ? (
            <>
              <div className="space-x-2 flex">
                <Skeleton className="h-10 w-[50px]" />
                <Skeleton className="h-10 w-[50px]" />
                <Skeleton className="h-10 w-[50px]" />
                <Skeleton className="h-10 w-[50px]" />
                <Skeleton className="h-10 w-[50px]" />
                <Skeleton className="h-10 w-[50px]" />
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold flex items-center justify-center font-MadimiOne">
           Sign Up
              </h2>

              <div className="m-5">
                <p ref={errRef} className={errMsg ? "errmsg" : "hidden"}>
                  {errMsg}
                </p>
                <form>
                  <label htmlFor="name">
                    <p  className="font-bold">
                      Name <sup>*</sup>
                    </p>
                    <Input
                      required
                      type="text"
                      id="name"
                      ref={userRef}
                      autoComplete="off"
                      name="name"
                      onChange={(e) => setUser(e.target.value)}
                      placeholder="Enter name"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                      className="w-72 bg-white rounded-sm m-2 text-black p-1"
                    />
                  </label>
                  <label>
                    <p  className="font-bold">
                      Phone Number <sup>*</sup>
                    </p>
                    <Input
                      required
                      type="tel"
                      name="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Phone number"
                      onFocus={() => setPhoneNumberFocus(true)}
                      onBlur={() => setPhoneNumberFocus(false)}
                      className="w-72 bg-white rounded-sm m-2 p-1 text-black"
                    />
                  </label>
                  <label>
                    <p>
                      Email Address <sup>*</sup>
                    </p>
                    <Input
                      required
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      className="w-72 bg-white rounded-sm m-2 text-black p-1"
                    />
                  </label>

                  <div>
                    <label
                      htmlFor="password"
                      className="flex flex-col  relative"
                    >
                      <p  className="font-bold">
                        Create Password <sup>*</sup>
                      </p>
                      <div className="relative ">
                        <Input
                          required
                          id="password"
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          onFocus={() => setPwdFocus(true)}
                          onBlur={() => setPwdFocus(false)}
                          placeholder="Enter Password"
                          className=" w-72 bg-white rounded-sm m-2 text-black p-1"
                        />
                        <span
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="cursor-pointer absolute inset-y-0 right-0 flex items-center 
      justify-center w-10 text-black rounded-r-sm"
                        >
                          {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                        </span>
                      </div>
                    </label>

                    <label className="flex flex-col   relative">
                      <p  className="font-bold">
                        Confirm Password <sup>*</sup>
                      </p>
                      <div className="relative ">
                        <Input
                          required
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => setMatchPwd(e.target.value)}
                          value={matchPwd}
                          placeholder="Confirm Password"
                          onFocus={() => setMatchFocus(true)}
                          onBlur={() => setMatchFocus(false)}
                          className="w-72 bg-white rounded-sm m-2 text-black p-1"
                        />
                        <span
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="cursor-pointer absolute inset-y-0 right-0 flex items-center 
      justify-center w-10 text-black rounded-r-sm"
                        >
                          {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                        </span>
                      </div>
                    </label>
                  </div>
                </form>
                <div className="flex items-center justify-center mt-2">
                  <Button
                    className={`bg-[#8DDFCB]/30 w-1/2 p-2 mt-2 rounded-lg 
                    hover:bg-[#8DDFCB]/10 text-black font-semibold ${
                      clicking
                        ? "transition-transform transform hover:scale-105"
                        : ""
                    }`}
                    onClick={otpClickHandler}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    Generate OTP
                  </Button>
                </div>

                <p className=" flex items-center justify-center flex-col mt-3 gap-1">
                  Already registered?
                  <span className="line">
                    <Link to="/login" className="hover:underline">
                      Log In
                    </Link>
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
