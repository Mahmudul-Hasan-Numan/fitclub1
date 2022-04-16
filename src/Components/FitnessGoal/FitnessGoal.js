import React from 'react';
import './FitnessGoal.css';
import fitnessGoal1 from '../../Images/fitnessGoal1.png';
import fitnessGoal2 from '../../Images/Rectangle 40.png';
import fitnessGoal3 from '../../Images/fitnessGoal3.png'

const FitnessGoal = () => {
    return (
        <div>
            <h1 className='fitness-heading'>What is Your <br /><span> Primary Fitness Goal</span></h1>
            <p><small className='fitness-plan'>Set up a Primary fitness goal to get workout routines and plans</small></p>
            <div className='fitness-goal'>
                <div className='goal-one'>
                    <img src={fitnessGoal1} alt="" />
                    <br />
                    <div className='muscles-button'>
                        <button>Build Muscles</button>
                    </div>
                </div>
                <div className='goal-two'>
                    <img src={fitnessGoal2} alt="" />
                    <br />
                    <div className='leaner-button'>
                        <button>Get Leaner</button>
                    </div>
                </div>
                <div className='goal-three'>
                    <img src={fitnessGoal3} alt="" />
                    <div className='strength-button'>
                        <button>Gain Strength</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FitnessGoal;