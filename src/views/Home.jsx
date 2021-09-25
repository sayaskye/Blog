import React, {useEffect} from 'react'
import Hero from '../components/layout/Hero'
import Posts from '../components/layout/Posts'
import Footer from '../components/layout/Footer'
import useArticlesStore from '../zustand/stores/articles'
import shallow from 'zustand/shallow'
const Home = () => {
    const {articles, getArticles, isLoading, errorMessage, hasError, limit} = useArticlesStore(state => ({
        articles:state.articles, getArticles:state.getArticles, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError, limit:state.limit
    }),shallow)
    useEffect(() => {
        getArticles().catch(null)
    }, [limit])
    return ( 
        <>
            <Hero exist={true}/>
            {isLoading && 
                <div className="bg-gray-600 flex flex-col justify-center items-center ">
                    <span className="text-red-400 text-5xl">Aviso!</span>
                    <span className="text-4xl container text-white mx-auto">La primera carga puede tardar aproximadamente 20s si el servidor esta hibernando, disculpa las molestias...</span>
                </div>
            }   
            <Posts/>
            <Footer/>
        </> 
    );
}
 
export default Home;