import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import Hero from '../../components/layout/Hero'
import Posts from '../../components/layout/Posts'
import Footer from '../../components/layout/Footer'
import useArticlesStore from '../../zustand/stores/articles'
import shallow from 'zustand/shallow'
const SubCategoriesSlug = () => {
    const { slug } = useParams();
    const {articles, getArticlesBySubCat, isLoading, errorMessage, hasError, limit} = useArticlesStore(state => ({
        articles:state.articles, getArticlesBySubCat:state.getArticlesBySubCat, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError, limit:state.limit
    }),shallow)
    useEffect(() => {
        getArticlesBySubCat(slug).catch(null)
    }, [limit,slug])
    return ( 
        <>
            <Hero exist={true}/>   
            <Posts/>
            <Footer/>
        </> 
    );
}
 
export default SubCategoriesSlug;