import React from 'react'

const FooterSocial = ({route, alt, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener" className="mx-1 hover:scale-125 duration-500 transition text-white">
            <img src={route} alt={alt} className="mx-2"/>
        </a>
    );
}
 
export default FooterSocial;