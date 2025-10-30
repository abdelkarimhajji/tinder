import  logo from '../assets/images/tinder.png'
import { BsTranslate } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
import { TbBrandTinderFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

function    NavBar()
{
    const   [open, setOpen] = useState(false)
    const   menuRef = useRef(null)
    useEffect(() => {
        function handleResize() {
          if (window.innerWidth >= 960 && open) {
            setOpen(!open); // just close the menu
          }
        }
      
        handleResize(); // run once at start
      
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [open]);

    return(
        <>
        <div className='fixed flex w-[100%] z-[1] p-4'>
        
            {/* start left  part of navbar */}
            <div className="flex w-[200px] cursor-pointer px-1 ">
                <div className="flex items-end w-[30px] 960:w-[40px]">
                    <img src={logo} alt='Tinder' className='960:w-10 960:h-10 w-7 h-7'/>
                </div>
                <div className="flex items-center content-center">
                    <h1 className='text-3xl 960:text-5xl font-bold text-white tracking-[-1.5px]'>tinder</h1>
                </div>
            </div>
            {/* end left part of navbar */}

            {/* start middle part of navbar */}
            <div className='justify-around cursor-pointer items-center  text-white font-bold underline underline-offset-[6px] gap-3 lg:gap-5 960:flex hidden ml-5 text-lg lg:text-xl 2300:w-[25%] w-[650px]'>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl" >Products</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Learn</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Safety</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Support</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Download</div>
            </div>
            {/* end middle part of navbar */}

            {/* start right part of navbar */}
            <div className='flex items-center justify-end text-white w-[75%] gap-8 '>
                <div className='960:hidden flex gap-1'>
                    <IoMenu className='mt-0.5  font-bold text-2xl cursor-pointer hover:text-gray-300' onClick={() => setOpen(!open)}/>
                </div>
                <div className='960:flex hidden gap-1'>
                    <BsTranslate className='mt-0.5 font-bold text-lg'/>
                    <p className='font-bold text-lg cursor-pointer' >Language</p>
                </div>
                <div className='bg-white hover:bg-gray-200 transition-colors duration-300 cursor-pointer text-black font-bold text-lg w-28 h-10 960:flex hidden items-center justify-center rounded-3xl'>
                    <p>Log in</p>
                </div>
            </div>
            {/* end right part of navbar */}



            {/* start make mobile navbar */}
            <div className={`w-[100%] h-screen bg-white fixed z-[3] top-0 transition-all duration-200   ${open ? "left-[0]" : "left-[100%]"}`} ref={menuRef}>
                {/* start top part of title and close icon */}
                <div className='w-[100%] flex '>
                    <div className='w-[30%] flex px-4 py-2'>
                        <div className='text-3xl flex relative w-7'>
                            <TbBrandTinderFilled  className='absolute top-1 text-sm-color'/>
                        </div>
                        <div className='font-bold text-3xl tracking-[-1.5px]'>
                            tinder
                        </div>
                    </div>
                    <div className='w-[70%] flex justify-end p-2 px-4'>
                        <IoClose  className='text-4xl text-gray-600 hover:text-gray-700 cursor-pointer' onClick={() => setOpen(!open)}/>
                    </div>
                </div>
                {/* end top part of title and close icon */}

                {/* start menu */}
                <div className='w-[100%] px-3 flex flex-col relative'>
                    <div className='w-[100%] px-2 py-2 bg-gray-100 cursor-pointer mb-4 font-semibold flex items-center'>
                        <div className='w-[97%] '>
                            <p>Products</p>
                        </div>
                        <div>
                            <IoIosArrowDown  className='text-3xl font-bold text-gray-600'/>
                        </div>
                    </div>
                    <div className='w-[100%] px-2 py-2 bg-gray-100 cursor-pointer mb-4 font-semibold flex items-center'>
                        <div className='w-[97%]'>
                            <p>Learn</p>
                        </div>
                        {/* <div>
                           <IoIosArrowDown  className='text-3xl font-bold text-gray-600'/>
                        </div> */}
                    </div>
                    <div className='w-[100%] px-2 py-2 bg-gray-100 cursor-pointer mb-4 font-semibold flex items-center'>
                        <div className='w-[97%]'>
                            <p>Safety</p>
                        </div>
                        <div>
                           <IoIosArrowDown  className='text-3xl font-bold text-gray-600'/>
                        </div>
                    </div>
                    <div className='w-[100%] px-2 py-2 bg-gray-100 cursor-pointer mb-4 font-semibold flex items-center'>
                        <div className='w-[97%]'>
                            <p>Support</p>
                        </div>
                        {/* <div>
                           <IoIosArrowDown  className='text-3xl font-bold text-gray-600'/>
                        </div> */}
                    </div>
                    <div className='w-[100%] px-2 py-2 bg-gray-100 cursor-pointer mb-4 font-semibold flex items-center'>
                        <div className='w-[97%]'>
                            <p>Download</p>
                        </div>
                        {/* <div>
                           <IoIosArrowDown  className='text-3xl font-bold text-gray-600'/>
                        </div> */}
                    </div>
                </div>

                {/* start bottom part for conection*/}
                <div className="w-[100%] h-[150px]  absolute bottom-0  flex-col 960:hidden flex  items-center">
                    <div className="w-[80%] h-12 text-white font-bold text-xl hover:text-gray-200 cursor-pointer flex justify-center items-center bg-black rounded-3xl mb-5">
                        Login
                    </div>
                    <div className="w-[80%] h-12  text-black font-bold text-xl hover:bg-gray-200 cursor-pointer border-2 border-white flex justify-center items-center bg-transparent rounded-3xl mb-5">
                        <div className='960:hidden flex gap-1'>
                            <BsTranslate className='mt-0.5 font-bold text-lg'/>
                            <p className='font-bold text-lg cursor-pointer' >Language</p>
                        </div>
                    </div>
                </div>
                {/* end bottom part for conection */}
                {/* end menu */}

            </div>
            {/* end mobile navbar */}
        </div>

        
       
</>
    );
}

export default NavBar