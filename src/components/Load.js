import { SiTinder } from "react-icons/si";
import { useState, useEffect } from "react";
function    Load()
{
    const [display, setDisplay] = useState(true);
     useEffect(() => {
        if (display) 
            document.body.style.overflow = "hidden";
        else 
            document.body.style.overflow = "auto";

    }, [display]);

    
    useEffect(() =>
    {
        const handleLoad = () => {
            setTimeout(() => setDisplay(false), 1500);
        }

        if(document.readyState === "complete")
            handleLoad()
        else
        {
            window.addEventListener("load", handleLoad)
            return () => window.removeEventListener("load", handleLoad);
        }
    }, [])
    return(
        <div className="w-[100%] h-screen absolute flex justify-center items-center bg-wel-gradient z-[3]" style={{display: display ? "flex" : "none" }}>
            <SiTinder className="text-7xl text-white animate-growMove" />
        </div>
    );
}

export default  Load