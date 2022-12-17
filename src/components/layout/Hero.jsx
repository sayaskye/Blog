import React from 'react'
import Navbar from '../common/Navbar';
const Hero = ({exist}) => {
    return (
        <div className="bg-home-background bg-cover bg-bottom ">
            <div className="container mx-auto pb-16 pt-6 sm:pt-11 md:pt-16 flex flex-col">
                {/* <Navbar/> */}
                {exist&&
                    <div className="bg-main-blue/[5%] rounded-2xl mt-4 flex flex-col backdrop-blur-sm">
                        <span className="my-12 text-center text-main-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">Andrés Cazares</span>
                        <span className="mb-12 text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">Bienvenido/a, este es mi blog personal</span>
                    </div>
                }
            </div>
            <hr className="border-main-blue border-[1px]"/>
        </div>
    );
}
 
export default Hero;