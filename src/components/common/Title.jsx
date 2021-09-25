import React from 'react'

const Title = ({title}) => {
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-center text-main-blue font-semibold my-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
            <hr className="border-main-blue border-[1px] mb-8"/>
        </div>
    );
}
 
export default Title;