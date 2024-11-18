import React, { useRef, useState } from 'react';
import './contactForm.css'
import emailjs from '@emailjs/browser'
import { Slide,  toast } from 'react-toastify';


const ContactForm = () => {
    //use ref to observe the reference from form
    const form = useRef();
    // State to manage loading state of submit button
    const [loading, setLoading] = useState(false);
    //sending form data to my mail using emailjs third party
    const sendEmail = (e) => {
        e.preventDefault();
        // Set loading state to true when form is submitted
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current, {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
        )
            .then(() => {
                toast.success('Message Sent!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Slide,
                });
                //after successful submit rest the form field or clear the current reference
                form.current.reset();
            })
            .catch((error) => {
                console.error('FAILED...', error);
                toast.error('Failed to send!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Slide,
                });
            })
            .finally(() => {
                // Reset loading state after form submission
                setLoading(false);
            });
    };

    return (
        <>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <div className="form-title">Contact Me</div>
                <input type="text" name='from_name' placeholder="Enter Your Name" className="input" required />
                <input type="email" name='from_email' placeholder="Enter your Email" className="input" required />
                <textarea name='message' placeholder="Your message" required></textarea>
                <button type='submit' disabled={loading}>
                    {loading ? <div className='dots'></div> : 'Submit'}
                </button>
            </form>
        </>
    )
}

export default ContactForm