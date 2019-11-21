import React, {Component} from 'react'
import './testimonials.scss'
import Slider from 'react-slick'

export class Testimonials extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
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
                                <div className='test-test'></div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Testimonials