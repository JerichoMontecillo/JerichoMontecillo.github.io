import React from 'react';
import './Intro.css';
import personalPic from '../../assets/photo.png';
import hire from '../../assets/hire_me.png';
import { Link } from 'react-scroll';

const Intro = () =>  {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="helloMessage">Hello,</span>
                <span className="introMessage">I am <span className="introName">Jericho</span></span>
                <p className="introParagraph">I am a motivated Computer Scientist from California State University of Fullerton. <br/> I enjoy playing and developing video games, puzzles, and really anything that works the mind.</p>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50}><button className="button"><img src={hire} alt="Hire Me" className="buttonImage" />Hire Me</button></Link>
            </div>
            <img src={personalPic} alt="Profile" className="background" />
        </section>
    )
}

export default Intro