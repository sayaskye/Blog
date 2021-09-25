import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useCategoriesStore from '../../zustand/stores/categories';
import useSubCategoriesStore from '../../zustand/stores/subCategories';
import shallow from 'zustand/shallow'

const NavDropdownMenuMobile = ({name,cat,subcat}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {categories, getCategories, isLoadingCat, errorMessageCat, hasErrorCat} = useCategoriesStore(state=>({
        categories:state.categories, getCategories:state.getCategories, isLoadingCat:state.isLoadingCat, errorMessageCat:state.errorMessageCat, hasErrorCat:state.hasErrorCat
    }),shallow)
    const {subCategories, getSubCategories, isLoadingSub, errorMessageSub, hasErrorSub} = useSubCategoriesStore(state=>({
        subCategories:state.subCategories, getSubCategories:state.getSubCategories, isLoadingSub:state.isLoadingSub, errorMessageSub:state.errorMessageSub, hasErrorSub:state.hasErrorSub
    }),shallow)
    
    if (categories===undefined) return null
    const subMenu=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <button className="border-black border-[1px] w-[96%] sm:w-[97.4%] md:w-[97.9%] bg-gray-700 mx-2 my-2 rounded-lg text-center justify-center items-center p-4 hover:scale-[1.01] duration-500 transition ease-in hover:bg-main-blue/40 hover:border-white z-10 flex " onClick={subMenu}>

            <div className=" text-white">
                <div className="font-semibold  rounded inline-flex items-center justify-center">
                    <span className="mr-1">{name}</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> 
                    </svg>
                </div>
                {cat && isOpen &&
                    <div className=" bg-gray-700  mt-8">
                        {categories.map((category) =>
                            <div key={category._id} className="">
                                <Link className="  hover:bg-main-blue/40 duration-500 transition py-2 px-4 block whitespace-no-wrap my-1 " to={`/categories/${category.slug}`}>
                                    { category.name }
                                </Link>
                            </div>
                        )}
                    </div>
                }
                {subcat && isOpen &&
                    <div className=" bg-gray-700  mt-8">
                        {subCategories.map((subCategory) =>
                            <div key={subCategory._id} className="">
                                <Link className="  hover:bg-main-blue/40 duration-500 transition py-2 px-4 block whitespace-no-wrap my-1 " to={`/subcategories/${subCategory.slug}`}>
                                    { subCategory.name }
                                </Link>
                            </div>
                        )}
                    </div>
                }
            </div>

        </button>
    );
}
 
export default NavDropdownMenuMobile;