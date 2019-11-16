import React, {Component} from 'react'
import './services.scss'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

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
            slidesToShow: 5,
            speed: 500,
            swipeToSlide: true,
            focusOnSelect: true,
        }
        return (
            <div className='services'>
                <div className='services-title'>
                    <h1>Services We Provide</h1>
                    <h2>Get the professional help you need for your home projects.</h2>
                </div>
                <div className='services-carousel'>
                    <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} >
                        <div className='service-option'>
                            <h1>Floor Installation</h1>
                        </div>
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
                    <Slider asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)}>
                        <div>
                            <h1>hi</h1>
                        </div>
                        <div>
                            <h1>hi</h1>
                        </div>
                        <div>
                            <h1>hi</h1>
                        </div>
                        <div>
                            <h1>hi</h1>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Services