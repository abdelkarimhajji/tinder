import { SiTinder } from "react-icons/si";
import { useState, useEffect } from "react";
function    Load()
{
    const [display, setDisplay] = useState(true);
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
        <div className="w-screen h-screen absolute flex justify-center items-center bg-wel-gradient" style={{display: display ? "flex" : "none" }}>
            <SiTinder className="text-7xl text-white animate-growMove" />
        </div>
    );
}

export default  Load