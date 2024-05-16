import React from 'react';
import './Skills.css';
import c_plus from '../../assets/c++.png';
import python from '../../assets/python.png';
import javascript from '../../assets/javascript.png';
import question from '../../assets/question.png';
import communication from '../../assets/communication.png';
import brain from '../../assets/brain.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillsTitle">Technical Skills</span>
            <span className="skillsDescription">I have spent 4+ years programming in multiple different languages. These are the languages that I am best versed in and how long I've been working with them. These are only limited to my best languages, I have experience with many more including SQL or x86</span>
            <div className="skillsSet">
                <div className="skillBar">
                    <img src={c_plus} alt="C++" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>C/C++</h2>
                        <p>Fully Proficient (4+ Years)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={python} alt="Python" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Python</h2>
                        <p>Fully Proficient (3+ Years) </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={javascript} alt="Javascript" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>JavaScript</h2>
                        <p>Fullt Proficient (1+ Years) </p>
                    </div>
                </div>
            </div>

            <span className="skillsTitle">Soft Skills</span>
            <span className="skillsDescription">These skills represent the best parts of my work ethic and provide what people would want to see from others. I believe these 3 are my best qualities in and out of the work environment.</span>
            <div className="skillsSet">
                <div className="skillBar">
                    <img src={question} alt="Question Mark" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Problem Identifying and Solving</h2>
                        <p>Figuring out when there is an issue and being able to act on it.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={communication} alt="Communication" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Communication</h2>
                        <p>Working as a team and properly talking with people when needed to reach a goal.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={brain} alt="Brain" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Positive Mindeset</h2>
                        <p>Always being able to have some type of forward thinking and always improving myself.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills