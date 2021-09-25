import React, {useEffect}    from 'react'
import PostSmallItem from '../common/PostSmallItem';
import FormSearch from '../common/FormSearch';
import format from 'date-fns/format';
import { es } from 'date-fns/locale'
import useRecomendedStore from '../../zustand/stores/recomended';
import shallow from 'zustand/shallow'
import PostSmallItemSkelleton from '../common/PostSmallItemSkelleton';

const SearchSection = () => {
    const {recomended, getRecomended, isLoading, errorMessage, hasError, limit} = useRecomendedStore(state => ({
        recomended:state.recomended, getRecomended:state.getRecomended, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError, limit:state.limit
    }),shallow)
    useEffect(() => {
        getRecomended("destacado").catch(null)
    }, [limit])
    let recomendedFetch = recomended
    
    const articlesToShow = recomendedFetch.map((article) =>
        <PostSmallItem 
        title={article.title} 
        slug={article.slug} 
        excerpt={article.body_excerpt} 
        date ={format(new Date(article.createdAt), 'dd MMMM yyyy', { locale: es })} 
        author={article.author.name} 
        img={article.image.url} 
        key={article._id}/>
    );

    if(hasError){return errorMessage}

    return (
        <div className="rounded-2xl bg-main-blue/10 w-auto   mt-8 lg:mt-0 flex flex-col">
            <FormSearch/>
            <span className=" text-white text-2xl text-center mt-8">Destacados</span>
            { isLoading?<PostSmallItemSkelleton/>:articlesToShow }
        </div>
    );
}
 
export default SearchSection;