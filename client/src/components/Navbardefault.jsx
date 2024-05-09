import React, { useState, useEffect } from "react";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Hospitals */}
      <li className="text-blue-gray flex items-center gap-x-2 p-1 font-medium">
        <a href="#" className="flex items-center hover:text-red-500">
          Hospitals
        </a>
      </li>
      {/* Account */}
      <li className="text-blue-gray flex items-center gap-x-2 p-1 font-medium">
        <a href="#" className="flex items-center hover:text-red-500">
          Account
        </a>
      </li>
      {/* Treatments */}
      <li className="text-blue-gray flex items-center gap-x-2 p-1 font-medium">
        <a href="#" className="flex items-center hover:text-red-500">
          Treatments
        </a>
      </li>
      {/* Queries */}
      <li className="text-blue-gray flex items-center gap-x-2 p-1 font-medium">
        <a href="#" className="flex items-center hover:text-red-500">
          Queries
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <a href="#" className="mr-4 cursor-pointer py-1.5 font-semibold text-2xl">
          OnDoc
        </a>
        <div className="hidden lg:block">{navList}</div>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {openNav && <div className="lg:hidden">{navList}</div>}
    </nav>
  );
};

export default NavbarDefault;
