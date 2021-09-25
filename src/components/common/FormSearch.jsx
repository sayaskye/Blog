import React, {useState} from 'react'
import useGlobalArticlesStore from '../../zustand/stores/globalArticles'
import shallow from 'zustand/shallow'

const FormSearch = () => {
    const {articles, getArticles, isLoading, errorMessage, hasError} = useGlobalArticlesStore(state => ({
        articles:state.articles, getArticles:state.getArticles, isLoading:state.isLoading, errorMessage:state.errorMessage, hasError:state.hasError
    }),shallow)
    const [search, setSearch] = useState({ 
        search: ''
      });
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        getArticles(search.search)
    }

    return (
        <form className="mt-10 text-gray-100 flex justify-center items-center" onSubmit={handleSubmit}>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button  type="submit" title="search" className="p-1 focus:outline-none focus:ring" >
                        <img src="/Search.svg" alt=""  className="w-4 h-4 text-gray-100"/>
                    </button>
                </span>
                <input onChange={handleChange} type="search" id="search" name="search" placeholder="Buscar..." className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-main-blue border-[1px] border-gray-500"/>
            </div>
        </form> 
    );
}
 
export default FormSearch;