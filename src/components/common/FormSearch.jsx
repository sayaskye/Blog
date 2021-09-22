import React from 'react'

const FormSearch = () => {
    return (
        <form className="mt-10 text-gray-100 flex justify-center items-center">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" title="search" className="p-1 focus:outline-none focus:ring">
                        <img src="/Search.svg" alt=""  className="w-4 h-4 text-gray-100"/>
                    </button>
                </span>
                <input type="search" name="Search" placeholder="Buscar..." className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-main-blue border-[1px] border-gray-500"/>
            </div>
        </form>
    );
}
 
export default FormSearch;