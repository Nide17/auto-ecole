import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    
    let bg = location.pathname === "/" ? "bg-[#F9F9F9]" : "bg-[#0C1D36]"
    let text = location.pathname === "/" ? "text-[#0C1D36]" : "text-[#F9F9F9]"

    return (
        <div className={`flex justify-center items-center h-6 w-full ${bg} ${text}`}>
            <p className="text-sm sm:text-sm">
                © {new Date().getFullYear()} <span className="font-bold">Quiz Blog</span> - All rights reserved
            </p>
        </div>
    )
}

export default Footer
