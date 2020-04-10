import React, {Component} from 'react'
import './footer.scss'
import logo from '../../Media/SGLogo.png'

export class Footer extends Component{
    render(){
        return (
            <div className='footer'>
                <div className='footer-logo'>
                    <img src={logo} />
                </div>
            </div>
        )
    }
}

export default Footer