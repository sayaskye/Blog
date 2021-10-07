import React from 'react'
import Hero from '../components/layout/Hero'
import Footer from '../components/layout/Footer'
import HelmetComponent from '../components/common/Helmet'

const ErrorPage = () => {

    return ( 
        <>
            <HelmetComponent title="Página no encontrada | AC-Blog"/>
            <Hero exist={false}/>
            <div className="h-[60vh] text-center bg-gray-600 flex items-center justify-center px-5">
                <span className="text-4xl font-bold text-red-400">
                    Lo siento, la pagina que intentas acceder no existe, pero aun puedes continuar navegando.
                </span>
            </div>
            <Footer/>
        </> 
    );
}
 
export default ErrorPage;