import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const usePostStore = create(
    (set,get)=>({
        getPost : async (slug)=>{
            if(!slug) return;
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const postResult = await apiCall({url:`${baseUrl}/articles/${slug}`})
                set({post:postResult})
            } catch (error) {
                set({post:{}, hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoading:false})
            }
        },
        post:{},
        isLoading:false,
        errorMessage:"",
        hasError:false,
    })
);

export default usePostStore;