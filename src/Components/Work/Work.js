import React, {Component} from 'react'
import './work.scss'
import Slider from "react-slick";


export class Work extends Component {
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
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        arrows: false
                    }
                }
            ]
        }
        return (
            <div className='work'>
                <div className='work-title'>
                    <h1>Our Recent Work</h1>
                    <h2>See the before and after of this remodeled Glendale home.</h2>
                </div>
                <div className='work-content'>
                    <div className='our-work'>
                        <div className='wb-title'>
                            <h1>Before</h1>
                        </div>
                        <div className='ba-content'>
                            <Slider 
                            asNavFor={this.state.nav2} 
                            ref={slider => (this.slider1 = slider)} 
                            className='slider' 
                            {...settings}
                            >
                                <div className='before-content_1'></div>
                                <div className='before-content_2'></div>
                                <div className='before-content_3'></div>
                            </Slider>
                        </div>
                    </div>
                    <div className='our-work'>
                        <div className='wb-title'>
                            <h1>After</h1>
                        </div>
                        <div className='ba-content'>
                            <Slider 
                            className='slider'
                            asNavFor={this.state.nav1} 
                            ref={slider => (this.slider2 = slider)}
                            {...settings} >
                                <div className='after-content'>
                                    <h1>After</h1>
                                </div>
                                <div className='after-content'>
                                    <h1>After</h1>
                                </div>
                                <div className='after-content'>
                                    <h1>After</h1>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work