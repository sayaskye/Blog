import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useGlobalArticlesStore = create(
    (set,get)=>({
        getArticles : async ()=>{
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const articlesResult = await apiCall({url:`${baseUrl}/articles`})
                set({articles:articlesResult})
            } catch (error) {
                set({articles:[], hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoading:false})
            }
        },
        articles:[],
        addLimit:() => set((state) => ({ limit: state.limit + 4 })),
        isLoading:false,
        errorMessage:"",
        hasError:false,
    })
);

export default useGlobalArticlesStore;