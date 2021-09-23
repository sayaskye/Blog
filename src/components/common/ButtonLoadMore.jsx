import React from 'react'
import useArticlesStore from '../../zustand/stores/articles';

const ButtonLoadMore = () => {
    const addLimit = useArticlesStore(state=>(state.addLimit))
    return (
        <button onClick={addLimit} className="h-10 mt-8 border-black border-[1px] flex bg-gray-700 mx-2 my-2 rounded-lg text-center justify-center items-center p-4 hover:scale-[1.01] duration-500 transition hover:bg-main-blue/40 hover:border-white text-white px-20"> Ver más </button>
    );
}
 
export default ButtonLoadMore;