import React, { useState } from 'react';
import './PortfolioPage.css';
import Modal from '../components/Modal';

const projects = [
    { id: 1, name: 'E-Commerce Website', description: 'A fully functional e-commerce platform that allows users to browse products, add them to a shopping cart, and securely checkout. Includes admin features for managing inventory and orders.' },
    { id: 2, name: 'Blog Platform', description: 'A blogging platform where users can create accounts, write, edit, and publish blog posts. Includes a rich text editor and the ability to comment on posts.' },
    { id: 3, name: 'Real-Time Chat Application', description: 'A real-time chat application that allows users to join chat rooms and send messages instantly.' },
    { id: 4, name: 'Weather App', description: 'An application that fetches and displays weather data for any location using a weather API.' },
];

function PortfolioPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (project) => {
        setModalContent({ title: project.name, content: project.description });
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="container">
            <h1>My Portfolio</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <h3>{project.name}</h3>
                        <button onClick={() => openModal(project)}>View Project</button>
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

export default PortfolioPage;
