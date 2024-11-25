import React, { useState } from 'react';
import './BlogPage.css';
import Modal from '../components/Modal';

const blogPosts = [
    { id: 1, title: 'How I Built My First Full-Stack Application: Lessons Learned', content: 'A detailed write-up of my journey building first full-stack application.' },
    { id: 2, title: 'Top 5 Tools Every Web Developer Should Know in 2024', content: 'A listicle-style blog post where I recommend essential tools for web developers and explain their benefits.' },
];

function BlogPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (post) => {
        setModalContent({ title: post.title, content: post.content });
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="container">
            <h1>My Blog</h1>
            <div className="blog-list">
                {blogPosts.map((post) => (
                    <div className="blog-card" key={post.id}>
                        <h3>{post.title}</h3>
                        <button onClick={() => openModal(post)}>Read More</button>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalContent.title}
                content={modalContent.content}
            />
        </div>
    );
}

export default BlogPage;
