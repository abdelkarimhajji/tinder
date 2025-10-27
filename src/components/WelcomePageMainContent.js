function MainContent()
{
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen bg-welcome bg-no-repeat bg-cover  z-[0] fixed top-0 left-0 text-center'>
            <div className='text-white'>
                <p className='xl:text-[12rem] lg:text-[10rem] md:text-[8rem] sm:text-[5rem] font-bold'>Swipe Right<span className="font-light">®</span></p>
            </div>
            <div className='text-white font-bold w-44 h-12 text-lg bg-wel-gradient-but cursor-pointer hover:text-black  transition-colors duration-300 flex items-center justify-center rounded-3xl'>
                create account
            </div>
        </div>
    );
}

export default MainContent