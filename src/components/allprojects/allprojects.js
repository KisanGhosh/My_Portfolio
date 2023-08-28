import React from 'react';
import Card from "../cards/card";

const allprojects = () => {
    return (
        <>
            <div className='project_content'>
                <h1>My Projects</h1>
                <div className="container cards_content">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Card
                                title='Ingenious Arts'
                                imageUrl='images/projects/ingenious.png'
                                body='This is a Landing Page of Ingenious Arts website using React Js,CSS.'
                                buttonUrl='https://github.com/KisanGhosh/Railway_Reservation_System_in_MERN'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='Weather app'
                                imageUrl='images/projects/expressTemp.png'
                                body='This is a Temperature Checking Website using Express.Js,HTML,CSS.'
                                buttonUrl='https://github.com/KisanGhosh/WebTemp'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='railgari'
                                imageUrl='images/projects/train1.png'
                                body='This is a Railway Ticket Booking Website using MERN Full Stack.'
                                buttonUrl='https://github.com/KisanGhosh/Railway_Reservation_System_in_MERN'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='railway reservation'
                                imageUrl='images/projects/train2.png'
                                body='This is a Railway Ticket Booking Website using JAVA FX.'
                                buttonUrl='https://github.com/KisanGhosh/Railway_Reservation_System_in_MERN'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='Calculator'
                                imageUrl='images/projects/calculator.png'
                                body='This is a Calculator app using HTML,CSS,JavaScript.'
                                buttonUrl='https://github.com/KisanGhosh/Railway_Reservation_System_in_MERN'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='Log In Page'
                                imageUrl='images/projects/login.png'
                                body='This is a Log In Page of a website using HTML,CSS,JavaScript.'
                                buttonUrl='https://github.com/KisanGhosh/Railway_Reservation_System_in_MERN'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='My Portfolio'
                                imageUrl='images/projects/portfolio.png'
                                body='This is My Portfolio. It is created using React Js.'
                                buttonUrl='https://github.com/KisanGhosh/Railway_Reservation_System_in_MERN'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default allprojects;
