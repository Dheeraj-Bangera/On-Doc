import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import  logo from "../assets/logo.png"


const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className="flex flex-row items-end justify-end bg-[#A2CAFB] h-fit text-white">
            <div className="overflow-hidden">
                <svg data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-[#ffffff]"></path>
                </svg>
                <div className="grid lg:grid-cols-4 sm:grid-cols-1 px-4 gap-12 cursor-pointer ">
                    <div className="flex flex-col ">
                    {/* <img src={logo} alt='Kennel' className='w-44' /> */}
                        <p>
                        "Find joy in adopting a furry friend at Kennel.
                         Give a loving home to dogs and cats in need. Make a difference, 
                         one paw at a time. Adopt, don't shop!"
                        </p>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-black py-2 uppercase">
                            Service
                        </li>
                        <li className="my-4 list-none hover:underline">Adoption</li>
                        <li className="my-4 list-none hover:underline">Vets</li>
                        <li className="my-4 list-none hover:underline">Volunteer</li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-black py-2 uppercase">
                           Help </li>
                        <li className="my-4 list-none hover:underline">Guidline</li>
                        <li className="my-4 list-none hover:underline">Training</li>
                        <li className="my-4 list-none hover:underline">Camp</li>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-black py-2 uppercase">Contact</h2>
                        <p className="text-[16px] my-4">Email: Kennel.gmail.com</p>
                        <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
                        <div className="flex space-x-4">
                            <a
                                className="text-white hover:text-black transform hover:scale-150 
                            transition-all duration-150 ease-in-out" href="">
                                <FaGithub />
                            </a>
                            <a
                                className="text-white hover:text-black transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="text-white hover:text-black transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white hover:text-black transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="h-full flex items-center justify-center mt-4 mb-3">
                        <form className="w-96 relative">
                            <input type="email" placeholder=""
                                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border " />
                            <button
                                type="Submit"
                                className=" bg-[#B99470] px-8 py-2 rounded-full text-black
                                 absolute top-0  right-0"
                                >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <h6 className="text-center">&copy; right onDoc {Year}</h6>
            </div>
        </footer>
    );
};

export default Footer;