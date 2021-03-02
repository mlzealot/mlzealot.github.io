import React, { Component } from 'react';
import {MDBFooter} from 'mdbreact';
import '../css/style_common.css'

class Footer extends Component {
    render() {
        return(
            <div className='flyout'>
            <MDBFooter className="primary-gradient">
                <p className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
                </p>
            </MDBFooter>
            </div>
        )
    }
}

export default Footer;
