import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useSubCategoriesStore = create(
    (set,get)=>({
        getSubCategories : async ()=>{
            try {
                set({isLoadingSub:true, errorMessageSub:"", hasErrorSub:false,})
                get({})
                //const subCategoriesResult = await apiCall({url:`${baseUrl}/subcategories?_limit=${get().limit}&_sort=createdAt:DESC`})
                const subCategoriesResult = await apiCall({url:`${baseUrl}/subcategories`})
                //console.log(subCategoriesResult);
                set({subCategories:subCategoriesResult})
            } catch (error) {
                set({subCategories:[], hasErrorSub:true, errorMessageSub:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoadingSub:false})
            }
        },
        subCategories:[],
        //limit:4,
        //addLimit:() => set((state) => ({ limit: state.limit + 4 })),
        isLoadingSub:false,
        errorMessageSub:"",
        hasErrorSub:false,
    })
);

export default useSubCategoriesStore;