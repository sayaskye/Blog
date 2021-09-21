import React from 'react'
import Title from '../common/Title';

const Posts = () => {
    let titulo="Blog"
    return (
        <div className="bg-gray-600">
            <div className="container mx-auto">
                <Title title={titulo} />
            </div>
        </div>
    );
}
  
export default Posts;