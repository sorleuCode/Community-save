import React from 'react';
import './Herosection.css';
import illustration from '../../../public/illustration.svg';
import howItWork from "../../../public/howItWork.jpg" 
import { Link } from 'react-router-dom';


const Herosection = () => {
    return (
        <>
            
            <div className="hero-container">
                <div className="hero-content">
                <h1 className="hero-title">iSave</h1>
                    <p className="hero-description">
                        Join a community of like-minded individuals who share your passion for saving and investing.
                    </p>
                    <Link to="/register"><button className="hero-button" >Register</button></Link>
                </div>
                <div className="hreo-illustration">
                    <img className='img' src={illustration} alt="Illustration" />
                </div>
            </div>
            <div className='about-us'>
                About Us
            </div>

            <div className='hero-text'>
                <p className='hero-text-description'>
                Get ready to transform your financial future with iSave, the ultimate weekly thrift collection app. Discover a world of smart savings tools, expert financial guidance, and a supportive community dedicated to helping you reach your goals. Join our weekly contribution plan, where you'll contribute a fixed amount alongside others with similar goals. Each week, our automatic selector will randomly choose a member to receive the collective contributions - a great way to boost your savings and achieve financial milestones.....

                </p>
            </div>
            <div className='more-btn'>
            <button className='btn-see-more'>See More</button>
            </div>
            <div className='how'>
                How it works
            </div>
            <div className='how-it-work'>
               
                    <img src={howItWork} alt='how-it-work-img'/>
            
                <div className='how-it-work-text'>
                <h4>Register</h4>
                <p>
                    Fill your personal details in just two minutes 
                </p>
                <h4>Join a Community</h4>
                <p>
                Select your goal amount, number of contributors, 
                organisation and account statement

                </p>
                <h4>we verify</h4>
                <p>
                With our automated system, we verify your 
                co-contributors employment with the selected
                 organisation, employment type, credit history, earnings and the solvency of his or her organisation
                </p>

                <h4>Take turns</h4>

                <p>
                We auto-debit your account on due date to 
                make your contribution with our secure and 
                PCIDSS complaint payment gateway

                </p>

                <h4>Receive your funds</h4>
                <p>
                We credit your account immediately 
                eduiduid duidui duo hduo hdpio 
                 sdfyigsdfuisduio sduiuisduisduouisdhuiosdhusdh
                </p>
                </div>
                
            </div>
         
        </>

        
    );
};

export default Herosection
