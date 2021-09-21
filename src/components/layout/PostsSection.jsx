import React from 'react'
import PostBigItem from '../common/PostBigItem';
import ButtonLoadMore from '../common/ButtonLoadMore';

const PostsSection = () => {
    let lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis obcaecati sed magnam quae odio, illo harum molestias commodi delectus! Molestiae in reiciendis similique minus vitae quisquam, hic illum earum exercitationem eum nostrum, amet totam recusandae labore voluptatem? Autem repellendus, repudiandae harum esse asperiores dignissimos vitae consectetur, repellat eum officia architecto." 
    return (
        <div className="rounded-2xl bg-main-blue/10 w-auto lg:w-[75%] flex flex-col justify-center items-center pb-7">
            <PostBigItem title="Texto de prueba numero 1" excerpt={lorem} date ="21 de Septiembre de 2021" author="Andrés Cazares" img="https://cdn.hytale.com/variants/blog_thumb_6727218981d7ff2e37b37bb64bbbb2a0_summer_2021_development_update_header.jpg"/>
            <PostBigItem title="Texto de prueba numero 2" excerpt={lorem} date ="21 de Septiembre de 2021" author="Andrés Cazares" img="https://cdn.hytale.com/variants/blog_thumb_bb21df3a03a8989ec93a658dce01415c_august_update_header.png"/>
            <PostBigItem title="Texto de prueba numero 3" excerpt={lorem} date ="21 de Septiembre de 2021" author="Andrés Cazares" img="https://cdn.hytale.com/variants/blog_thumb_7c18e0c12c0588073edd90aa6ced6791_landscape_generation_header.png"/>
            <PostBigItem title="Texto de prueba numero 4" excerpt={lorem} date ="21 de Septiembre de 2021" author="Andrés Cazares" img="https://cdn.hytale.com/variants/blog_thumb_5eaaeb8c26563f00171074de_april_progress_update_header.jpg"/>
            <ButtonLoadMore/>
        </div>
    );
}
 
export default PostsSection;