import React, {Component} from 'react';
import './header.css';
import Logo from '../../Media/SGLogo.png'
import {FaPhone} from 'react-icons/fa'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-logo'>
                    <img src={Logo} alt='Silva-Garcia Logo' />
                    <h1>Silva-Garcia</h1>
                </div>
                <div className='header-info'>
                    <FaPhone style={{color: 'white'}} size={30} />
                    <h1>907-854-4152</h1>
                </div>
            </div>
        )
    }
}

export default Header
