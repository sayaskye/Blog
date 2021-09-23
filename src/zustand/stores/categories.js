import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useCategoriesStore = create(
    (set,get)=>({
        getCategories : async ()=>{
            try {
                set({isLoadingCat:true, errorMessageCat:"", hasErrorCat:false,})
                get({})
                //const categoriesResult = await apiCall({url:`${baseUrl}/categories?_limit=${get().limit}&_sort=createdAt:DESC`})
                const categoriesResult = await apiCall({url:`${baseUrl}/categories`})
                //console.log(categoriesResult);
                set({categories:categoriesResult})
            } catch (error) {
                set({categories:[], hasErrorCat:true, errorMessageCat:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoadingCat:false})
            }
        },
        categories:[],
        //limit:4,
        //addLimit:() => set((state) => ({ limit: state.limit + 4 })),
        isLoadingCat:false,
        errorMessageCat:"",
        hasErrorCat:false,
    })
);

export default useCategoriesStore;