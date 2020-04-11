import React, {Component} from 'react'
import './hero.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export class Hero extends Component {
    render(){
        return(
            <div className='hero'>
                <div className='hero-overlay'></div>
                <div className='hero-info'>
                    <div className='hero-title'><h1>Home Improvement & Renovations in Phoenix Area</h1></div>
                    <div className='hero-buttons'>
                        <Link
                                className='active'
                                to='intro'
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-70}
                        >
                         <button className='hero-learn'>Learn More</button>
                        </Link>
                        <Link
                            className='active2'
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                        <button className='hero-cta'>Schedule Estimate</button>
                        </Link>
                    </div>
                </div>
                {/* <div className='hero-blank'></div> */}
            </div>
        )
    }
}

export default Hero