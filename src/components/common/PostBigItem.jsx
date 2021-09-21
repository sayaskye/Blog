import React from 'react'

const PostBigItem = ({title, excerpt, date, author, img}) => {
    return (
        <div className=" hover:bg-white/[0.08] flex flex-col md:flex-row mx-5 mt-5 duration-500 transition">

            <div className="m-2">
                <img src={img} alt="imagen"  className="w-full h-full object-cover border-main-blue border-[1px] rounded-lg"/>
            </div>
            
            <div className="w-auto md:w-2/3 h-1/2 md:h-full flex flex-col mx-5">

                <h3 className="text-2xl text-main-blue uppercase font-semibold mt-3 limitTitle">{title}</h3>
                <p className=" overflow-hidden text-white h-[4.5rem]">{excerpt}</p>

                <div className="flex flex-col xl:flex-row justify-between  my-2">
                    <span className="text-gray-400 underline">{date}</span>
                    <span className=" text-white">Publicado por: {author}</span>
                </div>

            </div>
        </div>
    );
}
 
export default PostBigItem;