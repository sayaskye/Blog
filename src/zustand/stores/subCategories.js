import create from "zustand";
import apiCall from '../../api'
import {baseUrl} from '../../constants'

const useSubCategoriesStore = create(
    (set,get)=>({
        getSubCategories : async ()=>{
            try {
                set({isLoadingSub:true, errorMessageSub:"", hasErrorSub:false,})
                const subCategoriesResult = await apiCall({url:`${baseUrl}/subcategories`})
                set({subCategories:subCategoriesResult})
            } catch (error) {
                set({subCategories:[], hasErrorSub:true, errorMessageSub:"Algo ha pasado, verifica tu conexión..."})
            } finally {
                set({isLoadingSub:false})
            }
        },
        subCategories:[],
        isLoadingSub:false,
        errorMessageSub:"",
        hasErrorSub:false,
    })
);

export default useSubCategoriesStore;