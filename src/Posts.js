import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const initialPosts = [
    {
        id: 1,
        title: 'Entry 01',
        date: new Date().toLocaleDateString(),
        preview: 'This is the preview of the first post...',
        content: 'Full content of the first post...'
    },
    {
        id: 2,
        title: 'Entry 02',
        date: new Date().toLocaleDateString(),
        preview: 'This is the preview of the second post...',
        content: 'Full content of the second post...'
    }
    // Add more posts as needed
];

function Post() {
    const { id } = useParams();
    const [posts] = useState(initialPosts);
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p1>{post.date}</p1>
            <p2>{post.content}</p2>
        </div>
    );
}

export default Post;