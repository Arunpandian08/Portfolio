import React, { useRef, useState,useEffect } from 'react';
import './contact.css';
import locationIcon from '../../assets/ContactSectionImages/location.png';
import objData from '../../Utilities/ProjectsData/data';
import emailjs from '@emailjs/browser'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//REGISTER THE PLUGIN FOR SCROLL TRIGGER IN GSAP
gsap.registerPlugin(ScrollTrigger);

// Using destructuring to retrieve contact icons from data file
const { ContactIcons } = objData;

const Contact = () => {
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
        form.current,{ 
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

  //GSAP animation 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //Heading animation
    gsap.fromTo(
      ".contact-heading-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Paragraph animation
    gsap.fromTo(
      ".contact-content-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".para",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // form container animation with stagger
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".form",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id='contact-section' className='contact-container'>
      <article className="contact-heading-section">
        <div className="contact-title">
          <h1 className="big big-2">Contact</h1>
          <h2 className="title-2">Contact Me</h2>
        </div>
      </article>
      <div className="contact-row">
        <article className="contact-content-container">
          <div className="img-row">
            <img src={locationIcon} width='100px' alt="Location" className="location-img" />
            <span className="location">Tirupur, Tamilnadu, India - 641 606.</span>
          </div>
          <p className="para">I am available for full-time employment or freelance projects. Feel free to reach out to me via the form below, or through my email, LinkedIn, or Instagram.</p>
          <div className="contact-img">
            {ContactIcons.map((item, index) => (
              <a href={item.URI} key={index} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} width='100px' alt="Contact Icon" />
              </a>
            ))}
          </div>
        </article>
        <article className="contact-form">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-title">Contact Me</div>
            <input type="text" name='from_name' placeholder="Enter Your Name" className="input" required />
            <input type="email" name='from_email' placeholder="Enter your Email" className="input" required />
            <textarea name='message' placeholder="Your message" required></textarea>
            <button type='submit' disabled={loading}>
              {loading ? <div className='dots'></div> : 'Submit'}
            </button>
          </form>
        </article>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
