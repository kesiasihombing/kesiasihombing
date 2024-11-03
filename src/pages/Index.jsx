/* eslint-disable no-unused-vars */
import React from 'react';

const Index = () => {
    return (
        <>
            {/* ABOUT */}
            <section id="About">
                <div className="main-container">
                    <h1 className="section-title-about">About</h1>
                    <p style={{ textAlign: "center" }}>
                    I am an enthusiastic student in Quality Assurance (QA) with project experience as a QA, especially in software testing and bug management. 
                    I have a basic understanding of manual and automated testing, and focus on ensuring the quality and functionality of the product. 
                    With analytical skills and high precision, I want to develop a career in QA while continuing to learn through new projects. 
                    In my free time, I enjoy exploring new technologies and keeping up with industry developments.</p>
                    <br />

                    <div className="grid-3">
                        {/* First about */}
                        <div className="About">
                            <div className="About-icon">
                                <img src="img/quality_assurance.png" alt="Quality Assurance" width="30" height="30" />
                            </div>
                            <h4>Quality Assurance</h4>
                            <p>
                            Quality Assurance is responsible for ensuring that software meets expected quality standards. QA creates test plans, performs various types of testing (functionality, integration, security, etc.), 
                            and documents bugs for the development team to fix. After fixing, QA retests and prepares a report of the test results. 
                            QA's role is important in ensuring the quality of software before it is released and is continuously updated according to 
                            technological developments.
                            </p>
                        </div>

                        {/* Second about */}
                        <div className="About">
                            <div className="About-icon">
                                <img src="img/sa.png" alt="System Analyst" width="30" height="30" />
                            </div>
                            <h4>System Analyst</h4>
                            <p>
                            A System Analyst is responsible for gathering and analyzing user requirements, designing and documenting systems, and coordinating with development teams and stakeholders. 
                            And also responsible for planning testing, training end users, and maintaining existing systems. 
                            Essential skills required include data analysis, effective communication, technology mastery, problem-solving, 
                            and project management, with an educational background in Information Systems or Information Technology being a primary requirement.    
                            </p>
                        </div>

                        {/* Third about */}
                        <div className="About">
                            <div className="About-icon">
                                <img src="img/web.png" alt="Web Development" width="30" height="30" />
                            </div>
                            <h4>Web Development</h4>
                            <p>
                            Design, develop, and maintain websites and web applications. Their duties include writing code for the front-end and back-end, 
                            ensuring site responsiveness and compatibility, and testing and fixing bugs. Essential skills include mastery of programming 
                            languages such as HTML, CSS, and JavaScript, as well as an understanding of UI/UX design and database management. 
                            A background in Computer Science or Information Technology is usually required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Experiences section */}
            <section id="Skills">
                <div className="main-container">
                    <h1 className="section-title-Skills">Skills & Experiences</h1>
                    <div className="Skills-grid">
                        <div className="Skills-left">

                            {/* First experience */}
                            <div className="Experiences">
                                <div className="line">
                                    <div></div>
                                </div>

                                <div className="Experiences-info">
                                    <h4 className="Experiences-title">PA 1 Website Alu alu Of Sitoluama</h4>
                                    <p>Building the Alu alu Of Sitoluama website</p>
                                    <h4 className="Experiences-date"></h4>
                                </div>
                            </div>

                            {/* Second experience */}
                            <div className="Experiences">
                                <div className="line">
                                    <div></div>
                                </div>

                                <div className="Experiences-info">
                                    <h4 className="Experiences-title">Website Cafe Friendzone</h4>
                                    <p>As a System Analyst, and a Quality Assurance</p>
                                    <h4 className="Experiences-date"></h4>
                                </div>
                            </div>

                            {/* Third experience */}
                            <div className="Experiences">
                                <div className="line">
                                    <div></div>
                                </div>

                                <div className="Experiences-info">
                                    <h4 className="Experiences-title">Website Balige</h4>
                                    <p>As a UI/UX Design and Front End Development</p>
                                    <h4 className="Experiences-date"></h4>
                                </div>
                            </div>
                        </div>

                        <div className="Skills-right">
                            <p>For skills that support my experiences</p>

                            <div className="Skills-List">
                                <ul>
                                    <li>Automation Testing</li>
                                    <li>Analyst</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>

                                <ul>
                                    <li>Katalon</li>
                                    <li>Laravel</li>
                                    <li>React</li>
                                    <li>Postman</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact section */}
            <section id="Contact">
                <div className="main-container">
                    <div style={{ textAlign: "center" }}>
                        <h1>Contact</h1>
                        <p>feel free to reach out.</p>
                    </div>
                    <br />
                    <form className="Contact-form">
                        <div>
                            <input type="text" name="name" placeholder="name" />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="email" />
                        </div>
                        <div>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="message"></textarea>
                        </div>
                        <div>
                            <button className="btn-submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Index;
