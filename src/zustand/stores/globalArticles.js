import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useGlobalArticlesStore = create(
    (set,get)=>({
        getArticles : async (search)=>{
            try {
                set({isLoading:true, errorMessage:"", hasError:false, override:true})
                const articlesResult = await apiCall({url:`${baseUrl}/articles?title_contains=${search}`})
                set({articlesFiltered:articlesResult})
            } catch (error) {
                set({articlesFiltered:[], override:false, hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoading:false, })
            }
        },
        falseOverride:()=>{
            set({override:false})
        },
        articlesFiltered:[],
        override:false,
        addLimit:() => set((state) => ({ limit: state.limit + 4 })),
        isLoading:false,
        errorMessage:"",
        hasError:false,
    })
);

export default useGlobalArticlesStore;