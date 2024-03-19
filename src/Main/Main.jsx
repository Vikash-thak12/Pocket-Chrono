import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <div className='main-container'>
            <div className="first">
                <div className="details">
                    <h1>Hi, <span>Learner</span></h1>
                    <p>Here you will get the Time management tools to manage your tasks and Time.</p>
                </div>
                <img src="time.png" />
                <button>Click Here to Start Your Journey</button>
            </div>
            <div className="second"></div>
        </div>
    );
};

export default Main;