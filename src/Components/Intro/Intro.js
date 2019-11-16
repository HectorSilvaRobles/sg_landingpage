import React, {Component} from 'react'
import './intro.scss'
import {GiHouse} from 'react-icons/gi'
import {MdBusiness} from 'react-icons/md'
import {FaSuitcase} from 'react-icons/fa'

export class Intro extends Component {
    render(){
        return (
            <div className='intro'>
                <div className='intro-title'>
                    <h1>Who we work with</h1>
                </div>
                <div className='intro-cards'>
                    <div className='card-1'>
                        <GiHouse size='80' className='icon' />
                        <h1>Residential</h1>
                        <p>We work with homeowers to help provide a living space they can call home.</p>
                    </div>
                    <div className='card-2'>
                        <MdBusiness size='80' className='icon' />
                        <h1>Commercial</h1>
                        <p>We work with homeowers to help provide a living space they can call home.</p>
                    </div>
                    <div className='card-3'>
                        <FaSuitcase size='80' className='icon' />
                        <h1>Investors</h1>
                        <p>We work with homeowers to help provide a living space they can call home.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro