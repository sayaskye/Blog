import React from 'react'

const Title = ({title}) => {
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-center text-main-blue ssm:text-6xl font-semibold my-5 text-3xl ">{title}</h1>
            <hr className="border-main-blue border-[1px] mb-8"/>
        </div>
    );
}
 
export default Title;