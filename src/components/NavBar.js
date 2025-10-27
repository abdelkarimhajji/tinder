import  logo from '../assets/images/tinder.png'
import { BsTranslate } from "react-icons/bs";

function    NavBar()
{
    return(
        <>
        <div className='fixed flex w-screen z-[1] p-4'>
            {/* start left  part of navbar */}
            <div className="flex w-[200px]">
                <div className="flex items-end">
                    <img src={logo} alt='Tinder' className='w-10 h-10'/>
                </div>
                <div className="flex items-center content-center">
                    <h1 className='text-5xl font-bold text-white tracking-[-1.5px]'>tinder</h1>
                </div>
            </div>
            {/* end left part of navbar */}

            {/* start middle part of navbar */}
            <div className='flex justify-around items-center text-white font-bold underline underline-offset-[6px] gap-0 text-xl w-[500px]'>
                <div>Products</div>
                <div>Learn</div>
                <div>Safety</div>
                <div>Support</div>
                <div>Download</div>
            </div>
            {/* end middle part of navbar */}

            {/* start right part of navbar */}
            <div className='flex items-center justify-end text-white w-[75%] gap-8'>
                <div className='flex  gap-1' >
                    <BsTranslate className='mt-0.5 font-bold text-lg'/>
                    <p className='font-bold text-lg' >Language</p>
                </div>
                <div className='bg-white hover:bg-gray-200 transition-colors duration-300 cursor-pointer text-black font-bold text-lg w-28 h-10 flex items-center justify-center rounded-2xl'>
                    <p>Log in</p>
                </div>
            </div>
            {/* end right part of navbar */}
        </div>

        <div className='flex flex-col justify-center items-center h-screen w-screen bg-welcome bg-no-repeat bg-cover  z-[0] fixed top-0 left-0'>
            <div className='text-white '>
                <p className='text-[12rem] font-bold'>Swipe Right</p>
            </div>
            <div className='text-white font-bold w-44 h-12 text-lg bg-wel-gradient-but cursor-pointer hover:text-black  transition-colors duration-300 flex items-center justify-center rounded-xl'>
                create account
            </div>
        </div>
        {/*  */}
</>
    );
}

export default NavBar