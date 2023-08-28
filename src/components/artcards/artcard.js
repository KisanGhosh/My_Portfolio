import React from 'react';
import "./artcard.css";

const card = ({ title, imageUrl, body, buttonUrl }) => {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className='card-container-art'>
            <div className="image-container-art">
                <img src={imageUrl} alt='' height="250px" width="200px" />
            </div>
            <div className="card-content-art">
                <div className="card-title-art">
                    <h3>{title}</h3>
                </div>

                <div className="card-body-art">
                    <p>{body}</p>
                </div>

                <div className="btn-art ">
                    <button role='link' onClick={() => openInNewTab(buttonUrl)}>Check it out</button>
                </div>
            </div>
        </div>
    );
};

export default card;
