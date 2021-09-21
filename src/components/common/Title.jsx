import React from 'react'

const Title = ({title}) => {
    return (
        <div className="flex flex-col">
            <span className="text-center text-main-blue text-7xl font-semibold my-5">{title}</span>
            <hr className="border-main-blue border-[1px] mb-8"/>
        </div>
    );
}
 
export default Title;