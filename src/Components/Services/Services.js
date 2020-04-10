import React, {Component} from 'react'
import './services.scss'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import flooring from '../../Media/flooring.jpg'
import exterior from '../../Media/exterior.jpg'
import interior from '../../Media/interior.jpg'
import drywall from '../../Media/drywall.jpg'
import kitchen from '../../Media/kitchen.jpg'
import bathroom from '../../Media/bathroom.jpg'
import lawn from '../../Media/lawnmaintance.jpg'
import pavers from '../../Media/pavers.jpg'
import concrete from '../../Media/ concrete.jpg'
import fence from '../../Media/fence.jpg'
import { Link, animateScroll as scroll } from "react-scroll";



export class Services extends Component {
    constructor(props){
        super(props)

        this.state = {
            nav1: null,
            nav2: null
        }
    }

    componentDidMount = () => {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        })
    }
    render(){
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 3,
            speed: 500,
            swipeToSlide: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 699,
                    settings: {
                        slidesToShow: 1
                    }
                }

            ]
        }
        return (
            <div className='services'>
                <div className='services-title'>
                    <h1>Services We Provide</h1>
                    <h2>Get the professional help you need for your home projects.</h2>
                </div>
                <div className='services-carousel'>
                    <Slider {...settings} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} >
                        <div className='service-option'>
                            <h1>Exterior Painting</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Interior Painting</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Drywall Installation</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Kitchen & Cabinets</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Floor Installation</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Bathroom Remodel</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Lawn Maintenance</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Walkways & Pavers</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Concrete Flatwork</h1>
                        </div>
                        <div className='service-option'>
                            <h1>Wall & Fencing</h1>
                        </div>
                    </Slider>
                </div>
                <div className='services-info'>
                    <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>                                    
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={exterior} alt='exterior painters painting the outside of a house' />
                                </div>
                                <div className='s-info'>
                                    <h1>Exterior Painting</h1>
                                    <p>We provide professional exterior painting services on a wide variety of surfaces to enhance your home’s look</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={interior} alt='interior painters painting the inside of a home' />
                                </div>
                                <div className='s-info'>
                                    <h1>Interior Painting</h1>
                                    <p>Our interior painting services help provide a seamless, efficient and high quality finish for the inside of your home.</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={drywall} alt='drywall after the repair'/>
                                </div>
                                <div className='s-info'>
                                    <h1>Drywall Installation</h1>
                                    <p>We are able to repair, install, sand and patch-up drywall to create a flawless surface to paint on</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={kitchen} alt='kitchen and cabinent remodeling' />
                                </div>
                                <div className='s-info'>
                                    <h1>Kitchen & Cabinets</h1>
                                    <p>We will put together your dream kitchen</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={flooring} />
                                </div>
                                <div className='s-info'>
                                    <h1>Floor Installation</h1>
                                    <p>We help install all types of floors. Ranging from carpert to tile and everything.</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                        
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={bathroom} alt='bathroom remodeling' />
                                </div>
                                <div className='s-info'>
                                    <h1>Bathroom Remodel</h1>
                                    <p>We will help remodel and provide a brand new looking bathroom of your choosing.</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={lawn} alt='Lawn maintenance and lawn care' />
                                </div>
                                <div className='s-info'>
                                    <h1>Lawn Maintenance</h1>
                                    <p>We will help maintain your lawn and much more!</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={pavers} alt='pavers on a backyard' />
                                </div>
                                <div className='s-info'>
                                    <h1>Walkways & Pavers</h1>
                                    <p>We will place down beautiful pavers and walkways to complement your home.</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={concrete} alt='concrete flatwork for homes' />
                                </div>
                                <div className='s-info'>
                                    <h1>Concrete Flatwork</h1>
                                    <p>We do all kinds of concrete pours, including sidewalks, driveways and curbs.</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                        <div className='service-card'>
                            <div className='sc-real'>
                                <div className='service-image'>
                                    <img src={fence} alt='fencing and wall installations' />
                                </div>
                                <div className='s-info'>
                                    <h1>Wall & Fencing</h1>
                                    <p>Having a barrier on your lawn is a way to keep your home secure and looking good.</p>
                                    <Link
                                        className='s-info-button'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        offset={-70}
                                    >
                                    <button>Schedule Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>                                      
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Services