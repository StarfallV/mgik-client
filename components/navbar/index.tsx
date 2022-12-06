import React from 'react'
import { Link } from "react-scroll"
import ModalLogin from '../modals/login'

function Navbar({ login } : any) {
    return (
        <>
            <nav className="shadow-sm fixed h-full z-10">
                <div className="h-full">
                    <div className="flex items-center w-20 h-full">
                        <div className="flex flex-col items items-center mx-4 h-full">
                            <div className="flex justify-center py-4 items-center flex-shrink-0">
                                <h1 className="font-black text-2xl text-blue-700 cursor-pointer">
                                    M-GIK
                                </h1>
                            </div>
                            <div className="flex flex-col divide-x-2">
                                <div className=" flex flex-col items-baseline space-x-3">
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 w-full hover:text-blue-500 transition linear duration-300">
                                        Dashboard
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 w-full hover:text-blue-500 transition linear duration-300">
                                        PO
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 w-full hover:text-blue-500 transition linear duration-300">
                                        Outlet
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 w-full hover:text-blue-500 transition linear duration-300">
                                        Kontrak
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 w-full hover:text-blue-500 transition linear duration-300">
                                        Item
                                    </Link>
                                    <Link activeClass="Home" to="about" smooth={false} offset={50} duration={500} 
                                    className="cursor-pointer tracking-wide text-gray-700 font-semibold px-3 py-2 w-full hover:text-blue-500 transition linear duration-300">
                                        Gudang
                                    </Link>                                                       
                                </div> 
                                <div className="ml-4 flex items-baseline space-x-10">                  
                                    <button onClick={() => login(true)}
                                    className="ml-5 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 hover:scale-105 text-white font-semibold py-2 px-10 rounded-full transition ease-in-out duration-300">
                                        Masuk
                                    </button>
                                </div>          
                            </div>
                        </div>
                    </div>  
                </div>
            </nav>
        </>
    )
}

export default Navbar