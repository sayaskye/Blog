import React from 'react'
import FooterSocial from '../common/FooterSocial'

const Footer = () => {
    let copy;
    let year = new Date().getFullYear();
    if(year!=2021){
        copy="2021-"+(new Date().getFullYear())
    }else{
        copy=2021
    }
    function goBackToTop(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col justify-items-center">
                <button className="text-center my-10 text-xl font-bold uppercase" onClick={goBackToTop}>
                    Volver arriba
                </button>
                <hr className="border-white border-[1px]"/>

                <div className="flex flex-col md:flex-row items-center justify-evenly my-10">
                    <div className="flex items-center justify-items-center">
                        <span className=" font-bold text-xl "> &copy; {copy} Andrés Cazares</span>
                    </div>

                    <div className="flex  items-center justify-items-center">
                        <FooterSocial route="/LinkedinFooter.svg" alt="Linkedin" link="https://www.linkedin.com/in/andres-cazares-web/"></FooterSocial>
                        <FooterSocial route="/YoutubeFooter.svg" alt="Youtube" link="https://www.youtube.com/channel/UC7ct6s_unpGb1TSM6xJgUwA"></FooterSocial>
                        <FooterSocial route="/TwitterFooter.svg" alt="Twitter" link="https://twitter.com/ChaoCazares"></FooterSocial>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;