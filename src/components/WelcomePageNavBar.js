import  logo from '../assets/images/tinder.png'
import { BsTranslate } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

function    NavBar()
{
    return(
        <>
        <div className='fixed flex w-[100%] z-[1] p-4 '>
        
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
            <div className='justify-around cursor-pointer items-center  text-white font-bold underline underline-offset-[6px] gap-3 lg:gap-5 960:flex hidden ml-5 text-lg lg:text-xl w-[650px]'>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Products</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Learn</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Safety</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Support</div>
                <div className="shadow-hover  hover:bg-white hover:text-black px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-3xl">Download</div>
            </div>
            {/* end middle part of navbar */}

            {/* start right part of navbar */}
            <div className='flex items-center justify-end text-white w-[75%] gap-8 '>
                <div className='960:hidden flex gap-1'>
                    <IoMenu className='mt-0.5  font-bold text-2xl cursor-pointer hover:text-gray-300'/>
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
        </div>

        
       
</>
    );
}

export default NavBar