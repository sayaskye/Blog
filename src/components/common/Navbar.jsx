import React, { useState, useEffect } from 'react'
import NavButton from './NavButton'
import NavSocial from './NavSocial';
import NavDropdownButton from './NavDropdownButton';
import NavDropdownMenuMobile from './NavDropdownMenuMobile';
import useCategoriesStore from '../../zustand/stores/categories';
import useSubCategoriesStore from '../../zustand/stores/subCategories';
import shallow from 'zustand/shallow'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {categories, getCategories, isLoadingCat, errorMessageCat, hasErrorCat} = useCategoriesStore(state=>({
        categories:state.categories, getCategories:state.getCategories, isLoadingCat:state.isLoadingCat, errorMessageCat:state.errorMessageCat, hasErrorCat:state.hasErrorCat
    }),shallow)
    const {subCategories, getSubCategories, isLoadingSub, errorMessageSub, hasErrorSub} = useSubCategoriesStore(state=>({
        subCategories:state.subCategories, getSubCategories:state.getSubCategories, isLoadingSub:state.isLoadingSub, errorMessageSub:state.errorMessageSub, hasErrorSub:state.hasErrorSub
    }),shallow)
    useEffect(() => {
        getCategories().catch(null)
        getSubCategories().catch(null)
    }, [])
    const [isOpen, setIsOpen] = useState(false)
    const menu = () => {
        setIsOpen(!isOpen)
    }
    return ( 
        <>
            <nav className="flex flex-row bg-gray-800 rounded-xl border-[1px] border-main-blue w-full justify-between shadow-2xl relative">
                <div className=" lg:flex justify-start items-center flex-1 hidden ">
                    <NavButton text="Inicio" route="/"></NavButton>
                    <NavDropdownButton name="Categoria" cat={true}/>
                    <NavDropdownButton name="Tema" subcat={true}/>
                    {/* <NavButton text="Sobre mi" route="/about"></NavButton> */}
                    <a href="https://andrescazares.netlify.app/" target="_blank" rel="noopener" className="font-bold border-black border-[1px] flex bg-gray-700 mx-2 my-2 rounded-lg text-center justify-center items-center p-4 hover:scale-[1.01] duration-500 transition hover:bg-main-blue/40 hover:border-white">
                        <span className="text-white ">
                            Portafolio
                        </span>
                    </a>
                    
                </div>
                
                <button onClick={menu} className=" m-1 p-3 flex lg:hidden justify-center items-center w-14 h-14">
                    <img src="/Menu.svg" alt="Menu svg" className="w-10 h-10"/>
                </button>
                <NavLink to="/" className="mx-2 my-2 flex flex-row justify-end lg:justify-center items-center text-center mr-5 lg:mr-0">
                    <img src="/logo.svg" alt="Logo AC web" className="h-[40px]"/>
                </NavLink>
                <div className="lg:flex flex-row justify-end items-center lg:flex-1 hidden">
                    <NavSocial route="/LinkedinNav.svg" alt="Linkedin" link="https://www.linkedin.com/in/andres-cazares-web/"></NavSocial>
                    <NavSocial route="/YoutubeNav.svg" alt="Youtube" link="https://www.youtube.com/channel/UC1Ai2CWXfgV_Clefkm1b5bw"></NavSocial>
                    <NavSocial route="/TwitterNav.svg" alt="Twitter" link="https://twitter.com/ChaoCazares"></NavSocial>
                </div>
            </nav>

            {
                isOpen &&
                <div className="bg-gray-800 container mx-auto translate-y-14 border-b-[1px] border-r-[1px] border-l-[1px] rounded-b-xl border-main-blue lg:hidden z-20 absolute">
                    <NavButton text="Inicio" route="/"></NavButton>
                    <NavDropdownMenuMobile name="Categoria" cat={true}/>
                    <NavDropdownMenuMobile name="Tema" subcat={true}/>
                    {/* <NavButton text="Sobre mi" route="/about"></NavButton> */}
                    <a href="https://andrescazares.netlify.app/" target="_blank" rel="noopener" className="font-bold border-black border-[1px] flex bg-gray-700 mx-2 my-2 rounded-lg text-center justify-center items-center p-4 hover:scale-[1.01] duration-500 transition hover:bg-main-blue/40 hover:border-white">
                        <span className="text-white ">
                            Portafolio
                        </span>
                    </a>
                    <div className="flex flex-row justify-center items-center my-10">
                        <NavSocial route="/LinkedinNav.svg" alt="Linkedin" link="https://www.linkedin.com/in/andres-cazares-web/"></NavSocial>
                        <NavSocial route="/YoutubeNav.svg" alt="Youtube" link="https://www.youtube.com/channel/UC1Ai2CWXfgV_Clefkm1b5bw"></NavSocial>
                        <NavSocial route="/TwitterNav.svg" alt="Twitter" link="https://twitter.com/ChaoCazares"></NavSocial>
                    </div>
                </div>
            }
        </>
    );
}
 
export default Navbar;