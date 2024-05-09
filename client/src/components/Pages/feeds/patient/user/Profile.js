import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import UserSidebar from "./UserSidebar";
// import YourPosts from './YourPosts';
import YourAppointment from "./YourAppointment";
import Legal from "./Legal";
import ChangePassword from "./ChangePassword";
import AccountSettings from "./AccountSettings";

const Profile = () => {
  // const [showSearch, setShowSearch] = useState(false); // Set initial state to true to show the search bar
  const { activepage } = useParams();
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="flex flex-col mb-8">
      <Navbar />

      {/* <Image add or banner later/> */}
      <h1 className="font-[knewave] flex justify-center   text-4xl">
        {activepage}
      </h1>
      <div className="relative ">
        <button onClick={handleGoBack} className="left-[140px] absolute p-2 rounded-lg text-black bottom-[10px]  bg-[#7AB2B2] ">
          Back
        </button>
      </div>
      <div className="flex w-full justify-center mt-4 gap-4">
        <div className="w-[20%] border-solid border-2	 rounded-md min-h-96	">
          <UserSidebar activepage={activepage} />
        </div>

        <div className="w-[60%] border-solid border-2	rounded-xl min-h-96	">
          {activepage === "accountsettings" && <AccountSettings />}
          {/* {activepage=== 'yourposts' && <YourPosts />} */}
          {activepage === "yourappointment" && <YourAppointment />}
          {activepage === "legalnotice" && <Legal />}
          {activepage === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
