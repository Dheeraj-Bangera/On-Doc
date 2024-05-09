// OTP.js
import React, { useState } from "react";
import { RiInboxArchiveFill } from "react-icons/ri";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
import { toast } from "sonner";
import { Button } from "../../ui/button";
import {useNavigate} from "react-router-dom"


function OTP({ signupData }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const index = parseInt(e.target.dataset.index, 10);

    if (!isNaN(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;

      if (value === "" && index > 0) {
        document.getElementById(`otpInput_${index - 1}`).focus();
      } else if (index < otp.length - 1 && value !== "") {
        document.getElementById(`otpInput_${index + 1}`).focus();
      }

      setOtp(newOtp);
    }
  };

  function ConcatenateArr(arr) {
    const strOtp = arr.join("");
    return parseInt(strOtp, 10);
  }
  const redirectToDashboard = () => {
    // Return the Navigate component to trigger redirection
     navigate('/')};
  
  const submitOtp = async () => {
    setLoading(true);
    const numOtp = ConcatenateArr(otp);
    signupData.otp = numOtp;


    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", signupData);
      if (response.status === 200) {
        const user = response.data.user;
        const token = response.data.token;
        localStorage.setItem('token', token);
        redirectToDashboard()
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast("Wrong OTP");
      } else {
        toast(error);
        console.error("An error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative z-10 border-2 border-[#BBC3A4] w-[40%] rounded-xl py-5 bg-[#AEC3AE] shadow-2xl">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl text-center font-medium">
            Check your mailbox for the OTP
          </h1>
          <RiInboxArchiveFill />
        </div>
  
        <div className="w-[80%] m-auto flex flex-row gap-2 my-5">
          {otp.map((data, i) => (
            <input
              id={`otpInput_${i}`}
              type="text"
              name="otp"
              className="border-2 bg-[#94A684] border-black w-12 h-12 text-2xl rounded-xl m-auto text-black text-center"
              maxLength={1}
              key={i}
              value={data}
              data-index={i}
              onChange={handleChange}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
  
        <div className="w-[80%] m-auto flex flex-row gap-2 justify-center my-5">
          <Button
            onClick={submitOtp}
            size="lg"
            variant="ghost"
            className="bg-[#8DDFCB]/30 px-8 py-2 rounded-lg mt-4 hover:bg-[#8DDFCB] w-1/3
              transition-transform transform hover:scale-105"
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
  
}

export default OTP;
