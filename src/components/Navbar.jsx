/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
    return (
        <header>
            <div className="main-container">
                <div className="Nav">
                    <div className="Logo">
                        <a href="">PORTOFOLIO</a>
                    </div>

                    <nav>
                        <ul>
                            <li><a href="#Home">HOME</a></li>
                            <li><a href="#About">ABOUT</a></li>
                            <li><a href="#Skills">SKILLS</a></li>
                            <li><a href="#Contact">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
                <section id="Home">
                    <div className="Home-left">
                        <h3 className="pre-title">Hi, it is me</h3>
                        <h1 className="Home-name">KESIA SIHOMBING</h1>
                        <p>An Information Technology Student at Del Institute Of Technology
                            who have an interest in the field of software testing and website development.
                            Reach out if you'd like to learn more!</p>
                        <br />
                        <a href="img/Kesia Sihombing-resume.pdf">
                            <button className="btn">My Resume</button>
                        </a>
                    </div>
                    <div className="Home-right">
                        <img src="img/kess.png" alt="images" />
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Navbar