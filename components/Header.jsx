import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
                <img className="h-12 w-12" src="./assets/lmlogo.png" alt="logo" />
                <button className="font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-xs text-white px-3 py-1.5 rounded-2xl">Luminum is Hiring</button>
            </div>
            <ul className="hidden lg:flex justify-between items-center fonmt-lato text-gray-400 gap-6">
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Luminum</a></li>
            </ul>
            <div className="hidden lg:flex justify-center items-center font-lato gap-6">
                <a className="text-gray-400"href="#">Sign In</a>
                <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join</button>
            </div>
            <div className="lg:hidden">
                <FaBars />
            </div>
        </div>
    )
}

export default Header