    import { TbBrandTinderFilled } from "react-icons/tb";
    import { FcGoogle } from "react-icons/fc";
    import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
    import { IoClose } from "react-icons/io5";

    function    Poupap({display, setDisplay})
    {
        return (
            <div className={`fixed ${display ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-500 flex flex-col justify-center items-center z-[2] w-[100%] h-screen bg-black/50`}>
                <div className={`w-[450px] h-[500px] ${display ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all transform duration-200 bg-white opacity-none text-black rounded-lg flex flex-col items-center jsutify-center`}>
                    <div className="w-[100%] flex justify-end px-4 py-2 pt-4">
                        <IoClose className="text-4xl text-gray-400 cursor-pointer hover:text-gray-300 transition duration-200" onClick={() => setDisplay(!display)}/> 
                    </div>
                    <div className='text-3xl flex w-[100%] items-end justify-center  mb-5'>
                        <TbBrandTinderFilled  className='text-sm-color text-4xl'/>
                    </div>
                    <div className="w-[100%] mb-5 font-bold  text-3xl text-center">
                        <p>Get Started</p>
                    </div>

                    <div className="w-[100%] px-14 font-semibold text-center text-sm mb-3">
                        <p>
                            By tapping Log In or Continue, you agree to our <span className="text-blue-600 underline underline-offset-1 decoration-[1.5px]">Terms</span>. Learn how we process your data in our <span className="text-blue-600 underline underline-offset-1 decoration-[1.5px]">Privacy Policy</span>, and <span className="text-blue-600 underline underline-offset-1 decoration-[1.5px]">Cookie Policy.</span>
                        </p>
                    </div>

                    <div className="w-[100%]  flex justify-center items-center flex-col">
                        {/* start button of goole conection */}
                        <div className="w-[80%] flex bg-blue-600 mb-4 text-white rounded-3xl px-0 py-1 cursor-pointer hover:bg-blue-400 transition-colors duration-150">
                            <div className="w-[12%]  flex justify-start pl-1">
                                <div className="text-xl bg-white rounded-full w-[33px] h-[33px] flex items-center justify-center">
                                    <FcGoogle />
                                </div>
                            </div>
                            <div className="w-[73%] flex flex-col">
                                <p className="text-[12px] font-semibold">Continue with Google</p>
                                <p className="text-[11px]">hajjikarim530@gmail.com</p>
                            </div>
                            <div className="w-[15%]  flex justify-end pr-1">
                                <div className="text-xl bg-white rounded-full w-[33px] h-[33px] flex items-center justify-center">
                                    <FcGoogle />
                                </div>
                            </div>
                        </div>
                        {/* end button of goole conection */}

                        {/* start button facebook */}
                        <div className="w-[80%] border-2 border-gray-300  rounded-3xl flex justify-center items-center py-2 mb-4 cursor-pointer hover:bg-gray-200">
                            <div className="">
                                <FaFacebook />
                            </div>
                            <div className="font-bold">
                                <p className="ml-2">Log in with Facebook</p>
                            </div>
                        </div>
                        {/* end button facebook */}

                        {/* start button number */}
                        <div className="w-[80%] border-2 border-gray-300  rounded-3xl flex justify-center items-center py-2 mb-7 cursor-pointer hover:bg-gray-200">
                            <div className="">
                                <FaPhoneAlt />
                            </div>
                            <div className="font-bold">
                                <p className="ml-2">Log in with Facebook</p>
                            </div>
                        </div>
                        {/* end button number */}
                    </div>

                    {/* start link of trouble loggin */}
                    <div className="w-[100%] flex flex-col items-center justify-center">
                        <p className="font-semibold text-blue-700 text-sm underline decoration-[1.5px] cursor-pointer hover:no-underline">Trouble Loggin In?</p>
                    </div>
                    {/* end link of trouble loggin  */}

                </div>
            </div>
        );
    }

    export default Poupap