import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Blog.css';



function Blog() {
    const [posts] = useState([
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
    ]);

    return (
        <div className="blog">
            <div className="post-grid">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <p>{post.preview}</p>
                    <Link to={`/post/${post.id}`}>Read more...</Link>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Blog;