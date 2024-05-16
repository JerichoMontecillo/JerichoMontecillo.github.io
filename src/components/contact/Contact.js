import React, {useRef} from 'react';
import './Contact.css'
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a785pf4', 'template_wv0emph', form.current, '3-_noREfi5T3dodxx').then((result) => {
                console.log(result.text);
                e.target.reset()
                alert('Email Sent !')
            }, (error) => {
              console.log(error.text);
            },
        );
    };
    return (
        <section className="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDescription">Fill out the form below to discuss any opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='from_name' />
                    <input type="text" className="email" placeholder="Your Email" name='from_email' />
                    <textarea className="message" name="message" cols="30" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitButton">Submit</button>

                    <div className="links">
                        <a href="https://twitter.com/JerichoMonteci1" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="Twitter" className="link" />
                        </a>
                        <a href="https://www.instagram.com/jericho.montecillo/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="Instagram" className="link" />
                        </a>
                        <a href="https://github.com/JerichoMontecillo" target="_blank" rel="noreferrer">
                            <img src={github} alt="GitHub" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact