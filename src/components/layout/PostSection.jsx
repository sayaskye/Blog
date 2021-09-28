import React from 'react'
import Title from '../common/Title';
import usePostStore from '../../zustand/stores/post';
import format from 'date-fns/format';
import { es } from 'date-fns/locale'
import { Remarkable } from 'remarkable';
import DOMPurify from 'dompurify'
import PostLoadingSkelleton from '../common/PostLoadingSkelleton';
import HelmetComponent from '../common/Helmet';

const PostSection = () => {
    const {post} = usePostStore(state=>({post:state.post}))
    if (post?.author?.name===undefined) return <PostLoadingSkelleton/> 
    const md = new Remarkable({
        html:true, 
    });
    const content = md.render(post.content)
    return (
        <>
            <HelmetComponent title={post.title}/>
            <article className="rounded-2xl w-auto flex flex-col items-center pb-7 px-2">
                <Title title={post.title} />
                <div className="text-white w-full">
                    <div className="flex sm:flex-row flex-col justify-between  mb-8 mx-2">
                        <p>Publicado por: <span className="">{post.author.name}</span></p>
                        <p>Fecha de publicación: <span className="capitalize">{format(new Date(post.createdAt), 'dd MMMM yyyy', { locale: es })}</span></p>
                    </div>
                    <div className="flex flex-row justify-center items-center aspect-w-16 aspect-h-7 mx-2">
                        <img src={post.image.url} alt={post.title}  className="object-cover"/>
                    </div>
                    <hr className="border-main-blue border-[1px] my-8 "/>
                    {/* <div id="innerHTML" className="mx-2 my-8" dangerouslySetInnerHTML={{__html:content}}> */}
                    <div id="innerHTML" className="mx-auto my-8 prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl text-white " 
                    dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(content)}}> 
                        
                    </div>
                </div>
            </article>
        </>
    );
}
 
export default PostSection;