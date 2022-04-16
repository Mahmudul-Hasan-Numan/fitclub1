import React from 'react';
import './FitclubStory.css';
import fitclubStory from '../../Images/storyBehind.png';
import realWorkout from '../../Images/real-workout.png';
import realWorkout1 from '../../Images/real-workout1.png';
import membership1 from '../../Images/membership1.png';
import membership2 from '../../Images/membership2.png';
import membership3 from '../../Images/membership3.png'

const FitclubStory = () => {
    return (
        <>
            <div className='fitclub_story'>
                <div className='story_behind'>
                    <img src={fitclubStory} alt="" />
                </div>
                <div>
                    <h1 className='fitclub-title'>Story Behind Fitclub</h1>
                    <p className='fitclub-description'>The client came to us with an idea of a multi-platform fitness marketplace where trainers can stream workouts in real-time and train sport lovers wherever they are. The idea was born while he was on vacation and imagined how cool it would be to have a coach nearby and to workout while on the beach.
                        <br />
                        <br />
                        Shortly speaking, Anywhere Fitness is created for those who have too many excuses not to go to gym. The app brings gym to wherever you are now.</p>
                    <a className='explore-link' href="">Explore Fitclub</a>
                </div>
            </div>
            {/* 
            --------------------------------------------------------------------------
            */}
            <div className='real-time-workout'>
                <div className='time-workout'>
                    <h1 className='workout-title'>Real Time Workout Using Video</h1>
                    <p className='workout-details'>Fit Camp's world-class instructors are dedicated to help you get a great workout. During our small group classes, they closely watch you and give you real-time feedback. In between classes, our instructors will keep you motivated and make sure you achieve your fitness goals.</p>
                    <img src={realWorkout1} alt="" />
                </div>
                <div className='workout-dumbbell'>
                    <img src={realWorkout} alt="" />
                </div>
            </div>
            {/*
             -------------------------------------------------------------
             Membership
             -------------------------------------------------------------
             */}
            <div className='free-trial'>
                <div>
                    <h1 className='memberships'>Monthly Memberships</h1>
                    <p className='trial-description'><span className='trial-price'>$11.00</span> Starting Price Per Month</p>
                    <button className='trial-button'>Start 30 days free trial</button>
                </div>
                <div className='trial'>
                    <img src={membership1} alt="" />
                    <img src={membership2} alt="" />
                    <img src={membership3} alt="" />
                </div>
            </div>
            {/*---------------------------------------------------------
                 Subscribe 
                 -------------------------------------------------------- */}
            <div className='subscribe'>
                <h1 className='subscribe-heading'>Subscribe to <br /> Our Newsletter</h1>
                <p className='subscribe-detail'>Subscribe to get latest updates about courses and offers on Fitclub</p>
                <input type="email" name="" id="" />
                <button>Subscribe</button>
            </div>

        </>

    );
};

export default FitclubStory;