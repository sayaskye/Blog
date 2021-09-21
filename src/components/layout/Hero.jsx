import React from 'react'
import Navbar from '../common/Navbar';
const Hero = ({exist}) => {
    return (
        <div className="bg-home-background bg-cover bg-bottom ">
            <div className="container mx-auto py-16 flex flex-col">
                <Navbar/>
                {exist&&
                    <div className="bg-main-blue/[5%] rounded-2xl mt-4 flex flex-col backdrop-blur-sm">
                        <span className="my-12 text-center text-main-blue text-7xl font-semibold">Andrés Cazares</span>
                        <span className="mb-12 text-center text-white text-4xl">Bienvenido a mi blog personal</span>
                    </div>
                }
            </div>
            <hr className="border-main-blue border-[1px]"/>
        </div>
    );
}
 
export default Hero;