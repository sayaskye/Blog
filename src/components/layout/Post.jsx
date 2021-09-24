import React from 'react'
import SearchSection from './SearchSection'
import PostSection from './PostSection';

const Post = () => {
    return (
        <div className="bg-gray-600">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row pb-8 justify-between  py-5">
                    <div className="w-auto lg:w-[75%]">
                        <PostSection/>
                    </div>
                    <div className="w-auto lg:w-[24%]">
                        <SearchSection/> 
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Post;