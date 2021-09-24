import React from 'react'
import Title from '../common/Title';
import usePostStore from '../../zustand/stores/post';
import format from 'date-fns/format';
import { es } from 'date-fns/locale'
import { Remarkable } from 'remarkable';
import DOMPurify from 'dompurify'

const PostSection = () => {
    const {post} = usePostStore(state=>({post:state.post}))
    if (post?.author?.name===undefined) return <p>Cargando post section...</p> 
    const md = new Remarkable({
        html:true, 
    });
    const content = md.render(post.content)
    return (
        <div className="rounded-2xl w-auto flex flex-col items-center pb-7">
            <Title title={post.title} />
            <div className="text-white">
                <div className="flex sm:flex-row flex-col justify-between  mb-8 mx-2">
                    <p>Publicado por: <span className="">{post.author.name}</span></p>
                    <p>Fecha de publicación: <span className="capitalize">{format(new Date(post.createdAt), 'dd MMMM yyyy', { locale: es })}</span></p>
                </div>
                <div className="flex flex-row justify-center items-center aspect-w-16 aspect-h-7 mx-2">
                    <img src={post.image.url} alt={post.title}  className="object-cover"/>
                </div>
                <hr className="border-main-blue border-[1px] my-8 mx-2"/>
                {/* <div id="innerHTML" className="mx-2 my-8" dangerouslySetInnerHTML={{__html:content}}> */}
                 <div id="innerHTML" className="mx-2 my-8" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(content)}}> 
                    
                </div>
            </div>
        </div>
    );
}
 
export default PostSection;