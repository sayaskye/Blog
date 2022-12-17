import React, {useEffect} from 'react'
import Hero from '../components/layout/Hero'
import Posts from '../components/layout/Posts'
import Footer from '../components/layout/Footer'
import useArticlesStore from '../zustand/stores/articles'
import useGlobalArticlesStore from '../zustand/stores/globalArticles'
import shallow from 'zustand/shallow'
import HelmetComponent from '../components/common/Helmet'
const Home = () => {
    const {articles, getArticles, isLoading, errorMessage, hasError, limit} = useArticlesStore(state => ({
        articles:state.articles, getArticles:state.getArticles, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError, limit:state.limit
    }),shallow)
    const { falseOverride } = useGlobalArticlesStore(state => ({
        falseOverride:state.falseOverride
    }),shallow)
    useEffect(() => {
        getArticles().catch(null)
        falseOverride()
    }, [limit])
    return ( 
        <>
            <HelmetComponent title="Inicio"/>
            <Hero exist={true}/>
            {isLoading && 
                <div className="bg-gray-600 flex flex-col justify-center items-center px-4">
                    <span className="text-red-400 text-5xl">Aviso!</span>
                    <span className="text-4xl container text-white mx-auto text-center md:text-left">La primera carga puede tardar aprox. 20s si el servidor esta hibernando, disculpa las molestias...</span>
                </div>
            }   
            <div className="bg-gray-600 flex flex-col justify-center items-center p-4">
                <span className="text-red-400 text-5xl">Aviso!</span> <br />
                <span className="text-4xl container text-white mx-auto text-center md:text-left">El servidor de backend se encuentra suspendido debido al reciente cambio de   politicas de Heroku, el servicio que usaba para hostear el backend de forma gratuita.</span> <br />
                <span className="text-4xl container text-white mx-auto text-center md:text-left">Durante el tiempo que estuvo activo el blog no entro nadie a visitarlo, asi que decidi dejarlo suspendido y no pagar para tenerlo activo ya que significaria tirar el dinero a la basura, me encuentro buscando otro hosting gratuito ahora mismo, pero hasta que no encuentre uno fiable, se quedara suspendido, si te interesa ver como era, puedes verlo en el siguiente video</span>
                <br />
            </div>
            <div className='bg-gray-600 p-5 '>
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border-2 border-solid border-main-blue max-w-[80%] mx-auto">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/3VB6-KLYQss"
                        title="YouTube video player"
                        allowFullScreen
                        className="border-none"
                    />
                </div>
            </div>
            {/* <Posts/> */}
            <Footer/>
        </> 
    );
}
 
export default Home;