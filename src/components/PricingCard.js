import React from 'react';
import "./PricingCardStyles.css";
import {Link} from "react-router-dom"

const PricingCard = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$30</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pagess -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btnc'>Purchase Now</Link>
                </div>
                <div>
                    <h3>- Business -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$70</p>
                    <p>- 4 Days -</p>
                    <p>- 5 Pagess -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btnc'>Purchase Now</Link>
                </div>
                <div>
                    <h3>- Advanced -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$100</p>
                    <p>- 5 Days -</p>
                    <p>- 8 Pagess -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btnc'>Purchase Now</Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;
