import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useRecomendedStore = create(
    (set,get)=>({
        getRecomended : async (slug)=>{
            if(!slug) return;
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const recomendedResult = await apiCall({url:`${baseUrl}/categories/${slug}?_limit=${get().limit}&_sort=createdAt:DESC`})
                //const recomendedResult = await apiCall({url:`${baseUrl}/categories/destacado`})
                //console.log(recomendedResult);
                set({recomended:recomendedResult.articles})
            } catch (error) {
                set({recomended:[], hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoading:false})
            }
        },
        recomended:[],
        limit:4,
        //addLimit:() => set((state) => ({ limit: state.limit + 4 })),
        isLoading:false,
        errorMessage:"",
        hasError:false,
    })
);

export default useRecomendedStore;