import React from 'react'
import { Link } from 'react-router-dom';
const NavButton = ({ route, text}) => {
    return (
        <Link to={route} className="font-bold border-black border-[1px] flex bg-gray-700 mx-2 my-2 rounded-lg text-center justify-center items-center p-4 hover:scale-[1.01] duration-500 transition hover:bg-main-blue/40 hover:border-white">
            <span className="text-white ">
                {text}
            </span>
        </Link>
    );
}
 
export default NavButton;