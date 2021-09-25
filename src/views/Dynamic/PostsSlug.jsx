import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import usePostStore from '../../zustand/stores/post'
import Hero from '../../components/layout/Hero'
import Footer from '../../components/layout/Footer'
import Post from '../../components/layout/Post'
import shallow from 'zustand/shallow'
const PostsSlug = () => {
    const { slug } = useParams();
    const {getPost, isLoading, errorMessage, hasError} = usePostStore(state=>({
        getPost:state.getPost, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError
    }),shallow)

    useEffect(() => {
        getPost(slug).catch(null)
    }, [slug])
    
    if (hasError) return errorMessage
    return ( 
        <div>
            <Hero exist={false}/>   
            {
                
                <>
                    {hasError ? <p>{errorMessage}</p> : <Post/>}
                </>
            }
            <Footer/> 
        </div> 
    );
}
 
export default PostsSlug;