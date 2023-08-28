import React from 'react';
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Art from './art';
import '../App.css';

const main = () => {
    // const openResume = () => {
    //     window.open('https://drive.google.com/file/d/1t8S8G4lblZPe4zX2gRt1LF5pZ6uLKS3c/view?usp=drive_link', '_blank');
    //   };

    // const openGithub = () => {
    //     window.open('https://github.com/KisanGhosh', '_blank');
    //   };

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div>
            <div className='main_content'>
                <div className='row'>
                    <div className='col-md-6 col-12 main_left '>
                        <h2>Hey! I am</h2>
                        <h1>Kisan Ghosh.</h1>
                        <p>I'm a Full Stack Developer.</p>
                        <div className='buttons_main'>
                            <button className='main-button' role='link' onClick={() => openInNewTab('https://drive.google.com/file/d/1t8S8G4lblZPe4zX2gRt1LF5pZ6uLKS3c/view?usp=drive_link')}>Check My Resume</button>
                            <button className='main-button' role='link' onClick={() => openInNewTab('https://github.com/KisanGhosh')}>Go To My Github</button>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 main_right'>
                        <img src='/images/me1.jpeg' className='main_image' alt='me' />
                    </div>
                </div>
            </div>
            <Projects />
            <Art />
            <About />
            <Contact />
        </div>
    );
};

export default main;
