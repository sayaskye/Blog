import React from 'react'

const NavSocial = ({route, alt, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener" className="mx-1 scale-125 hover:scale-150 duration-500 transition text-white">
            <img src={route} alt={alt} className="mx-2"/>
        </a>
    );
}
 
export default NavSocial;