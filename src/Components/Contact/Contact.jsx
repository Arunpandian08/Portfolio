import React from 'react'
import './contact.css'
import objData from '../../Helper/dataStore'
import locationIcon from '../../assets/Images/ContactSectionIcons/location.png'
import ContactForm from './ContactForm/ContactForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const { contactIcons } = objData
    return (
        <div className='contact-content'>
            <div className="heading">
                <div className="title">
                    <h1 className="big">Contact Me</h1>
                    <h2 className="big-2">Contact</h2>
                </div>
            </div>
            <div className="contact-row">
                <article className="contact-content-container">
                    <div className="img-row">
                        <img src={locationIcon} width='100px' alt="Location" className="location-img" />
                        <span className="location">Tirupur, Tamilnadu, India - 641 606.</span>
                    </div>
                    <p className="para">I am available for full-time employment or freelance projects. Feel free to reach out to me via the form below, or through my email, LinkedIn, or Instagram.</p>
                    <div className="contact-img">
                        {contactIcons.map((item, index) => (
                            <a href={item.URI} key={index} target="_blank" rel="noopener noreferrer">
                                <img src={item.icon} width='100px' alt="Contact Icon" />
                            </a>
                        ))}
                    </div>
                </article>
                <article className="contact-form">
                    <ContactForm />
                </article>
            </div>
                <ToastContainer />
        </div>
    )
}

export default Contact