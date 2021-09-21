import React from 'react'

const PostBigItem = ({title, excerpt, date, author, img}) => {
    return (
        <div className="bg-white/[0.02] hover:bg-white/[0.08] flex flex-row m-5 duration-500 transition">
            <img src={img} alt="imagen"  className="w-1/3 m-2 object-cover border-main-blue border-[1px]"/>
            <div className="w-2/3 flex flex-col mx-5">
                <h3 className="text-2xl text-main-blue uppercase font-semibold my-3 ">{title}</h3>
                <p className="limitTextLines text-white ">{excerpt}</p>
                <div className="flex flex-row justify-between  my-2">
                    <span className="text-gray-400 underline">{date}</span>
                    <span className=" text-white">Publicado por: {author}</span>
                </div>
            </div>
        </div>
    );
}
 
export default PostBigItem;