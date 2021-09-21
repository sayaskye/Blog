import React from 'react'
import NavButton from './NavButton'
import NavSocial from './NavSocial';
const Navbar = () => {
    return ( 
        <div className="flex flex-row bg-gray-800 rounded-xl border-[1px] border-main-blue w-full justify-between shadow-2xl">
            <div className=" flex justify-center items-center flex-1">
                <NavButton text="Inicio" route="/"></NavButton>
                <NavButton text="Desarrollo" route="/Desarrollo"></NavButton>
                <NavButton text="Reseñas" route="/Resenas"></NavButton>
                <NavButton text="Sobre mí" route="/SobreMi"></NavButton>
            </div>
            <div className=" flex justify-center items-center flex-grow text-center">
                <img src="/logo.svg" alt="Logo AC web" className="h-[40px]"/>
            </div>
            <div className=" flex justify-center items-center flex-1">
                <NavSocial route="/LinkedinNav.svg" alt="Linkedin" link="https://www.linkedin.com/in/andres-cazares-web/"></NavSocial>
                <NavSocial route="/YoutubeNav.svg" alt="Youtube" link="https://www.youtube.com/channel/UC7ct6s_unpGb1TSM6xJgUwA"></NavSocial>
                <NavSocial route="/TwitterNav.svg" alt="Twitter" link="https://twitter.com/ChaoCazares"></NavSocial>
            </div>
        </div>
    );
}
 
export default Navbar;