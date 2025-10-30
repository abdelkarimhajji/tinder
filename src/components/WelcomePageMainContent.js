import Poupap from "../components/WelcomePagePoupap.js"
import { useState } from "react"

function MainContent()
{
    const [display, setDisplay] = useState(false)

    return (
        <>
        <div className='flex flex-col justify-center items-center h-screen w-screen bg-welcome bg-no-repeat bg-cover  z-[0] fixed top-0 left-0 text-center'>
            <div className='text-white'>
                <p className='xl:text-[12rem] lg:text-[10rem] 960:text-[8rem]  text-[2rem] font-bold'>Swipe Right<span className="font-light">®</span></p>
            </div>
            <div  className='text-white font-bold w-44 h-12 text-lg bg-wel-gradient-but cursor-pointer hover:text-black  transition-colors duration-300 960:flex hidden items-center justify-center rounded-3xl' onClick={() => setDisplay(!display)}>
                Create account
            </div>
            <div className="w-[100%] h-[250px]  absolute bottom-0  flex-col 960:hidden flex  items-center">
                <div className="w-[80%] h-12 hover:text-gray-300 text-white font-bold text-xl  cursor-pointer flex justify-center items-center bg-black rounded-3xl mb-5">
                    Create account
                </div>
                <div className="w-[80%] h-12  text-white font-bold text-xl hover:text-gray-300 cursor-pointer border-2 border-white flex justify-center items-center bg-transparent rounded-3xl mb-5">
                    Login
                </div>
            </div> 
        </div>
         <Poupap display={display} setDisplay={setDisplay}/> 
        </>
    );
}

export default MainContent