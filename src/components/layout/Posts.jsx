import React from 'react'
import Title from '../common/Title';
import PostsSection from './PostsSection';
import SearchSection from './SearchSection'

const Posts = () => {
    let titulo="Blog"
    return (
        <div className="bg-gray-600">
            <div className="container mx-auto">
                <Title title={titulo} />
                <div className="flex flex-row pb-8 justify-between">
                    <PostsSection/>
                   {/* <SearchSection/> */}
                </div>
            </div>
        </div>
    );
}
  
export default Posts;