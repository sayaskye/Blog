import React from 'react'
import { Link } from 'react-router-dom';

const PostSmallItem = ({title, excerpt, date, author, img, slug}) => {
    return (
        <Link to={`/articles/${slug}`} className="flex flex-col mx-5 my-5 duration-500 transition rounded-lg bg-white shadow-2xl">
            <div className=" flex flex-row justify-center items-center  aspect-w-4 aspect-h-1 lg:aspect-w-3">
                <img src={img}  alt="imagen"  className="object-cover rounded-t-lg"/>
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="text-center text-black font-bold text-2xl lg:text-base sm:my-3 lg:my-1">{title}</div>
            <span className="text-gray-400 capitalize text-center sm:my-3 lg:my-1"><span className="border-dashed border-b-[1px] border-gray-400/40">{date}</span></span>
            </div>
        </Link>
    );
}
 
export default PostSmallItem;