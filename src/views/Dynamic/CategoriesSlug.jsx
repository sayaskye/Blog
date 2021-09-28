import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import Hero from '../../components/layout/Hero'
import Posts from '../../components/layout/Posts'
import Footer from '../../components/layout/Footer'
import useArticlesStore from '../../zustand/stores/articles'
import useGlobalArticlesStore from '../../zustand/stores/globalArticles';
import shallow from 'zustand/shallow'
import HelmetComponent from '../../components/common/Helmet';
const CategoriesSlug = () => {
    const { slug } = useParams();
    const {articles, getArticlesByCat, isLoading, errorMessage, hasError, limit} = useArticlesStore(state => ({
        articles:state.articles, getArticlesByCat:state.getArticlesByCat, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError, limit:state.limit
    }),shallow)
    const { falseOverride } = useGlobalArticlesStore(state => ({
        falseOverride:state.falseOverride
    }),shallow)
    useEffect(() => {
        getArticlesByCat(slug).catch(null)
        falseOverride()
    }, [limit,slug])
    return ( 
        <>
            <HelmetComponent title={slug.toUpperCase()}/>
            <Hero exist={true}/>   
            <Posts/>
            <Footer/>
        </> 
    );
}
 
export default CategoriesSlug;