import React, {useEffect} from 'react'
import Title from '../common/Title';
import PostsSection from './PostsSection';
import SearchSection from './SearchSection'
import useArticlesStore from '../../zustand/stores/articles';

const Posts = () => {

    let titulo="Blog"
    return (
        <div className="bg-gray-600">
            <div className="container mx-auto">
                <Title title={titulo} />
                <div className="flex flex-col lg:flex-row pb-8 justify-between">
                    <div className="w-auto lg:w-[75%]">
                        <PostsSection/>
                    </div>
                    <div className="w-auto lg:w-[24%]">
                        <SearchSection/> 
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Posts;