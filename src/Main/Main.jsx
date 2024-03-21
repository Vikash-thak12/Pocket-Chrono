import React from 'react';
import './Main.css';
import { assets } from '../assets/assets';

const Main = () => {
    const handleButtonClick = () => {
        // Open the link in the same window or frame
        window.location.href = "https://tracker.freewebhostmost.com/";
    };

    return (
        <div className='main-container'>
            <div className="first">
                <div className="details">
                    <h1>Hi, <span>Learner</span></h1>
                    <p>Here you will get the Time management tools to manage your tasks and Time.</p>
                </div>
                <img src={assets.time_icon} alt="Time Icon" />
                <button onClick={handleButtonClick}>Click Here to Start Your Journey</button>
            </div>
            <div className="second"></div>
        </div>
    );
};

export default Main;
