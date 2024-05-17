import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import about1 from "../Assets/about-1.jpg"
import about2 from "../Assets/about-2.jpg"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>I'm a React developer. I create responsive web design for my clients.</p>
                <Link to="/contact"><button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={about1} className="img" alt="true" />
                    </div>
                    <div className="img-stack top">
                        <img src={about2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
