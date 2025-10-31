import { IoClose } from "react-icons/io5";
import { TbBrandTinderFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

function    PoupapPhone()
{
    return(
        <div className="fixed transition-all duration-500 flex flex-col justify-center items-center z-[2] w-[100%] h-screen bg-black/50">
            <div className="960:w-[420px] 960:h-[410px] w-[100%] h-screen bg-white 960:rounded-xl px-2">
                <div className="w-[100%] flex justify-end px-4 py-1 pt-4">
                    <IoClose className="text-4xl text-gray-400 cursor-pointer hover:text-gray-300 transition duration-200"/> 
                </div>
                <div className='text-3xl flex w-[100%] items-end justify-center  mb-5'>
                    <TbBrandTinderFilled  className='text-sm-color text-4xl'/>
                </div>
                <div className="w-[100%] mb-5 font-bold  text-3xl text-center">
                    <p>Can we get your number?</p>
                </div>

                <div className="w-[100%] flex px-4 mb-4">
                    <div className="960:w-[100px] w-[110px]">
                        <p className="text-sm font-medium">Country</p>
                        <div className="relative w-[100%] h-11 flex justify-center items-center border bg-slate-100 cursor-pointer rounded-md border-gray-500">
                            <p className="flex relative text-gray-600">MA +212 <IoIosArrowDown className="relative top-1 left-1"/></p>
                        </div>
                    </div>
                    <div className="w-[90%] 960:w-[70%] ml-3">
                        <p className="text-sm font-medium">Phone Number</p>
                        <div className="relative w-[100%] ">
                            <input className="border h-11 border-gray-500 rounded-lg bg-slate-100 w-[100%] outline-blue-500 outline-offset-[0.1px] pl-3" placeholder="Phone Number"/>
                            {/* <p className="flex relative text-gray-600">MA +212 <IoIosArrowDown className="relative top-1 left-1"/></p> */}
                        </div>
                    </div>
                </div>

                <div className="px-5 mb-5">
                    <p className="text-sm text-gray-700">
                        We’ll text you a code to verify you’re really you. Message and data rates may apply. <span className="underline underline-offset-[1.5px] decoration-[1.5px] text-blue-600 font-bold">What happens if your number changes?</span>
                    </p>
                </div>

                <div className="w-[100%] flex justify-center items-center absolute bottom-10 960:static">
                    <div className="960:w-[200px] w-[75%] bg-gray-200 font-semibold text-lg text-gray-600 flex justify-center items-center h-[50px] rounded-3xl cursor-pointer">
                        <p>Next</p>
                    </div>
                </div>

            </div>

            
        </div>
    );
}

export default PoupapPhone