import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Blog.css';

function splitTitle(title) {
    const words = title.split(' ');
    const firstPart = words.slice(0, 5).join(' ');
    const secondPart = words.slice(5).join(' ');
    return { firstPart, secondPart };
}

function Blog() {
    const [posts] = useState([
        {
            id: 1,
            title: 'Set up a Postgresql Database with me',
            date: new Date().toLocaleDateString(),
            preview: 'Hello world! In this vlog we are going to set up a...',
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
            {posts.map(post => {
                const { firstPart, secondPart } = splitTitle(post.title);
                return (
                    <div key={post.id} className="post">
                        <h2>
                            {firstPart}
                            {secondPart && <br />}
                            {secondPart}
                        </h2>
                        <p>{post.date}</p>
                        <p>{post.preview}</p>
                        <Link to={`/post/${post.id}`}>Read more...</Link>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Blog;