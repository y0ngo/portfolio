import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_bs99ina',        // your service ID
            'template_txj97fo',       // your template ID
            form.current,
            '3tno_oKb1HIKTLZ8B'       // your public key
        )
        .then(() => {
            alert('Message sent!');
        }, () => {
            alert('Failed to send message.');
        });
    };

    return (
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>I’m always open to freelance opportunities — especially ambitious or large-scale projects. My work spans a wide range of areas including sports, cinematography, restaurants, fashion, and advertising. If you have a project in mind or just want to connect, feel free to reach out through the contact form below or via my social channels.</p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="social-links">
                    <p>Or message me on:</p>
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-button instagram">Instagram</a>
                    <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" className="social-button tiktok">TikTok</a>
                </div>
            </div>
        </div>
    );
}


export default Contact;
