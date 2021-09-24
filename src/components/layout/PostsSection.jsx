import React, {useEffect} from 'react'
import PostBigItem from '../common/PostBigItem';
import ButtonLoadMore from '../common/ButtonLoadMore';
import format from 'date-fns/format';
import { es } from 'date-fns/locale'
import useArticlesStore from '../../zustand/stores/articles';


const PostsSection = () => {
    const {articles, getArticles, isLoading, errorMessage, hasError, limit} = useArticlesStore(state => ({
        articles:state.articles, getArticles:state.getArticles, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError, limit:state.limit
    }))
    
    let articlesFetch = articles
    
    const articlesToShow = articlesFetch.map((article) =>
        <PostBigItem 
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
        <div className="rounded-2xl bg-main-blue/10 w-auto flex flex-col justify-center items-center pb-7">
            {isLoading?"Cargando...":articlesToShow}
            <ButtonLoadMore/>
        </div>
    );
}
 
export default PostsSection;