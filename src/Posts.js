import React from 'react';
import { useParams } from 'react-router-dom';
import Post1 from './postsdata/Post1';
import Post2 from './postsdata/Post2';


const postsMap = {
    1: Post1,
    2: Post2
    
};

function Posts() {
    const { id } = useParams();
    const PostComponent = postsMap[id];

    if (!PostComponent) {
        return <div>Post not found</div>;
    }

    return <PostComponent />;
}

export default Posts;
