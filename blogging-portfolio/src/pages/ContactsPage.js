import React, { useState, useEffect } from 'react';
import './ContactsPage.css';

function ContactsPage() {
    const [comments, setComments] = useState([]);

    const generateRandomName = () => {
        const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Chris', 'Sarah', 'Michael', 'Sophia', 'Daniel', 'Emma'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        return `${randomFirstName} ${randomLastName}`;
    };

    const generateRandomComment = () => {
        const positiveComments = [
            "Amazing service! Highly recommend.",
            "Professional and reliable!",
            "Outstanding work and attention to detail.",
            "Simply excellent. Couldn't ask for more.",
            "Very friendly and easy to work with.",
            "Five stars!",
        ];
        return positiveComments[Math.floor(Math.random() * positiveComments.length)];
    };

    useEffect(() => {
        const addComment = () => {
            const newComment = {
                id: Date.now(),
                name: generateRandomName(),
                text: generateRandomComment(),
            };
            setComments((prevComments) => {
                // Add new comment and keep only the last 5
                const updatedComments = [...prevComments, newComment];
                return updatedComments.length > 5 ? updatedComments.slice(1) : updatedComments;
            });
        };

        const interval = setInterval(addComment, 3000); // Generate a new comment every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="contacts-page">
            <div className="contact-info">
                <h1>Contact Me</h1>
                <p>Email: claireredfield@gmail.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Address: 14 Raccoon Street, USA</p>
            </div>

            <div className="comments-section">
                <h2>Live Feedback</h2>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <strong>{comment.name}</strong>: {comment.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactsPage;
