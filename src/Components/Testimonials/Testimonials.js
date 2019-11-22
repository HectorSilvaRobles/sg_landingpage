import React, {Component} from 'react'
import './testimonials.scss'
import Slider from 'react-slick'

export class Testimonials extends Component {
    render(){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // useCSS: false,
            fade: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000,
            cssEase: 'linear'
        }
        return (
            <div className='testimonials'>
                <div className='testimonial-overlay'></div>
                <div className='test-title'>
                    <h1>What Our Clients Say.</h1>
                </div>
                <div className='test-info'>
                    <Slider {...settings} className='test-slider' >
                        <div className='testimonial-card'>
                            <div className='test-card'>
                                <div className='card-top'>
                                    <h1>"</h1>
                                </div>
                                <div className='test-test'>
                                    <h1>Fantastic service at a great value. Roy and Edrel were very timely and professional. Would 100% recommend to anyone.</h1>
                                </div>
                                <div className='card-bottom'>
                                    <div className='test-person'>
                                        <h1>Taryn Mason</h1>
                                        <h2>Homeowner</h2>
                                    </div>
                                    <div className='test-quote'>
                                        <h1>"</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-card'>
                            <div className='test-card'>
                                <div className='card-top'>
                                    <h1>"</h1>
                                </div>
                                <div className='test-test'>
                                    <h1>By choosing their services I know I am going to be free of hassle, struggle, time waste, or any bad experience. I enjoy the peace of mind.</h1>
                                </div>
                                <div className='card-bottom'>
                                    <div className='test-person'>
                                        <h1>Haydee Reyna Bullock</h1>
                                        <h2>Real Estate Investor</h2>
                                    </div>
                                    <div className='test-quote'>
                                        <h1>"</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-card'>
                            <div className='test-card'>
                                <div className='card-top'>
                                    <h1>"</h1>
                                </div>
                                <div className='test-test'>
                                    <h1>Great service, friendly, and professional help.</h1>
                                </div>
                                <div className='card-bottom'>
                                    <div className='test-person'>
                                        <h1>Rafael Gutierrez</h1>
                                        <h2>Homeowner</h2>
                                    </div>
                                    <div className='test-quote'>
                                        <h1>"</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Testimonials