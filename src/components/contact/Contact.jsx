import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mwyo35q', 'template_62bons4', form.current, 'AvrCjuHTglMJogy_Q')

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMailOutline className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>gebrenathnael@gmail.com</h5>
            <a href="mailto:gebrenathnael@gmail.com" target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </article>
          <article className="contact-option">
            <FaLinkedin className='contact-option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Nathnael Gebre</h5>
            <a href="https://www.linkedin.com/in/nathnael-gebre-6348b41a6/" target='_blank' rel='noopener noreferrer'>Connect</a>
          </article>
          <article className="contact-option">
            <FaGithub className='contact-option-icon'/>
            <h4>GitHub</h4>
            <h5>nathyfbg</h5>
            <a href="https://github.com/natyfbg" target='_blank' rel='noopener noreferrer'>Visit Profile</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Name"  required/>
          <input type="email" name='email' placeholder="Email" required/>
          <textarea name="message" id="message" cols="30" rows="7" placeholder="Message"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
