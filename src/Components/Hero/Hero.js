import React, {Component} from 'react'
import './hero.scss'

export class Hero extends Component {
    render(){
        return(
            <div className='hero'>
                <div className='hero-overlay'></div>
                <div className='hero-info'>
                    <h1>Home Improvement & Renovations in Phoenix Area</h1>
                    <div className='hero-buttons'>
                        <button className='hero-learn'>Learn More</button>
                        <button className='hero-cta'>Schedule Estimate</button>
                    </div>
                </div>
                <div className='hero-blank'></div>
            </div>
        )
    }
}

export default Hero