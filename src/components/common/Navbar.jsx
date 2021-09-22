import React, { useState } from 'react'
import NavButton from './NavButton'
import NavSocial from './NavSocial';
import NavDropdownButton from './NavDropdownButton';
import NavDropdownMenuMobile from './NavDropdownMenuMobile';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menu = () => {
        setIsOpen(!isOpen)
    }
    return ( 
        <>
            <div className="flex flex-row bg-gray-800 rounded-xl border-[1px] border-main-blue w-full justify-between shadow-2xl relative">
                <div className=" lg:flex justify-start items-center flex-1 hidden ">
                    <NavButton text="Inicio" route="/"></NavButton>
                    <NavDropdownButton name="Categoria" cat={true}/>
                    <NavDropdownButton name="Tema" subcat={true}/>
                    <NavButton text="Sobre mi" route="/about"></NavButton>
                    
                </div>
                
                <button onClick={menu} className=" m-1 p-3 flex lg:hidden justify-center items-center w-14 h-14">
                    <img src="/Menu.svg" alt="Menu svg" className="w-10 h-10"/>
                </button>
                <div className="mx-2 my-2 flex flex-row justify-end lg:justify-center items-center text-center mr-5 lg:mr-0">
                    <img src="/logo.svg" alt="Logo AC web" className="h-[40px]"/>
                </div>
                <div className="lg:flex flex-row justify-end items-center lg:flex-1 hidden">
                    <NavSocial route="/LinkedinNav.svg" alt="Linkedin" link="https://www.linkedin.com/in/andres-cazares-web/"></NavSocial>
                    <NavSocial route="/YoutubeNav.svg" alt="Youtube" link="https://www.youtube.com/channel/UC7ct6s_unpGb1TSM6xJgUwA"></NavSocial>
                    <NavSocial route="/TwitterNav.svg" alt="Twitter" link="https://twitter.com/ChaoCazares"></NavSocial>
                </div>
            </div>

            {
                isOpen &&
                <div className="bg-gray-800 container mx-auto translate-y-14 border-b-[1px] border-r-[1px] border-l-[1px] rounded-b-xl border-main-blue lg:hidden z-20 absolute">
                    <NavButton text="Inicio" route="/"></NavButton>
                    <NavDropdownMenuMobile name="Categoria" cat={true}/>
                    <NavDropdownMenuMobile name="Tema" subcat={true}/>
                    <NavButton text="Sobre mi" route="/about"></NavButton>
                    <div className="flex flex-row justify-center items-center my-10">
                        <NavSocial route="/LinkedinNav.svg" alt="Linkedin" link="https://www.linkedin.com/in/andres-cazares-web/"></NavSocial>
                        <NavSocial route="/YoutubeNav.svg" alt="Youtube" link="https://www.youtube.com/channel/UC7ct6s_unpGb1TSM6xJgUwA"></NavSocial>
                        <NavSocial route="/TwitterNav.svg" alt="Twitter" link="https://twitter.com/ChaoCazares"></NavSocial>
                    </div>
                </div>
            }
        </>
    );
}
 
export default Navbar;