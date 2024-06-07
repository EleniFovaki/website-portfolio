import React from 'react';
import '../css/Posts.css';

const Post1 = () => {
    return (
        <div className="post">
            <h2>Set up a PostgreSQL Database with me</h2>
            <p>2024-06-06</p>
            <div>
                Welcome to my blog! Today, we are going to set up a PostgreSQL database from scratch. This tutorial will guide you through the installation process, configuration, and some basic SQL commands to get you started.
                <h3>Introduction</h3>
                PostgreSQL is a powerful, open-source object-relational database system. It has a proven architecture and runs on all major operating systems.
                <h3>Step 1: Installation</h3>
                First, download PostgreSQL from the official website. Follow the installation instructions specific to your operating system.
                <h3>Step 2: Configuration</h3>
                After installation, we need to configure PostgreSQL. Edit the `postgresql.conf` file to set your configuration options.
                <h3>Step 3: Basic Commands</h3>
                Here are some basic SQL commands to get you started:
                <pre>
                    CREATE DATABASE mydb;
                    CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';
                    GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
                </pre>
                That's it for today's tutorial. Stay tuned for more!
            </div>
        </div>
    );
};

export default Post1;
