import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useCategoriesStore = create(
    (set,get)=>({
        getCategories : async ()=>{
            try {
                set({isLoadingCat:true, errorMessageCat:"", hasErrorCat:false,})
                const categoriesResult = await apiCall({url:`${baseUrl}/categories`})
                set({categories:categoriesResult})
            } catch (error) {
                set({categories:[], hasErrorCat:true, errorMessageCat:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoadingCat:false})
            }
        },
        categories:[],
        isLoadingCat:false,
        errorMessageCat:"",
        hasErrorCat:false,
    })
);

export default useCategoriesStore;