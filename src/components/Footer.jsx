import React from 'react';
import "./FooterStyles.css";
import { FaHome, FaInstagram, FaMailBulk, FaPhone, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <p>123 Housing Society.</p>
                        <p>Pakistan</p>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+92343-4544676</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />abc123@exapmle.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>

                    <p>lorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                        ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                    <div className='social'>
                        <Link to="https://facebook.com" target='_blank'><FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                        <Link to="https://instagram.com" target='_blank'><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                        <Link to="https://linkedin.com" target='_blank'><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
