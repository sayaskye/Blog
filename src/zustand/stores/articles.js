import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useArticlesStore = create(
    (set,get)=>({
        getArticles : async ()=>{
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const articlesResult = await apiCall({url:`${baseUrl}/articles?_limit=${get().limit}&_sort=createdAt:DESC`})
                set({articles:articlesResult})
            } catch (error) {
                set({articles:[], hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoading:false})
            }
        },
        getArticlesByCat : async (slug)=>{
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const articlesResult = await apiCall({url:`${baseUrl}/categories/${slug}?_limit=${get().limit}&_sort=createdAt:DESC`})
                set({articles:articlesResult.articles})
            } catch (error) {
                set({articles:[], hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión s..."})
            } finally {
                set({isLoading:false})
            }
        },
        getArticlesBySubCat : async (slug)=>{
            try {
                set({isLoading:true, errorMessage:"", hasError:false,})
                const articlesResult = await apiCall({url:`${baseUrl}/subcategories/${slug}?_limit=${get().limit}`})
                set({articles:articlesResult.articles})
            } catch (error) {
                set({articles:[], hasError:true, errorMessage:"Algo ha pasado, verifica tu conexión x..."})
            } finally {
                set({isLoading:false})
            }
        },
        articles:[],
        limit:4,
        addLimit:() => set((state) => ({ limit: state.limit + 4 })),
        isLoading:false,
        errorMessage:"",
        hasError:false,
    })
);

export default useArticlesStore;