import React from 'react'

const Title = ({title}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-center text-main-blue text-7xl font-semibold my-5">{title}</h1>
            <hr className="border-main-blue border-[1px] mb-8"/>
        </div>
    );
}
 
export default Title;