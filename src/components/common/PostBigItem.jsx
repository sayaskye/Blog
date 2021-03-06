import React from 'react'
import { Link } from 'react-router-dom';

const PostBigItem = ({title, excerpt, date, author, img, slug}) => {
    return (
        <Link to={`/articles/${slug}`} className=" hover:bg-white/[0.08] flex flex-col md:flex-row mx-5 mt-5 duration-500 transition w-[95%] md:w-auto rounded-xl">

            <div className="m-2 flex flex-row justify-center items-center aspect-w-3 aspect-h-1 md:aspect-w-16 md:aspect-h-3 2xl:aspect-h-2 md:w-1/3 relative overflow-hidden rounded-lg border-main-blue border-[1px]">
                <img src={img}  alt="imagen"  className="object-cover  rounded-lg absolute hover:scale-110 duration-500 transition"/>
            </div>
            
            <div className=" md:w-2/3 flex flex-col mx-5">

                <h3 className="text-2xl text-main-blue uppercase font-semibold mt-1 limitTitle">{title}</h3>
                <p className="overflow-hidden text-white hidden md:block md:h-[4.5rem]">{excerpt}</p>

                <div className="flex flex-col ssm:flex-row justify-between  my-2">
                    <span className="text-gray-400 capitalize"><span className="border-dashed border-b-[1px] border-gray-400/40">{date}</span></span>
                    <span className=" text-white">Publicado por: {author ? author : "Andrés Cazares" }</span>
                </div>

            </div>
        </Link>
    );
}
 
export default PostBigItem;