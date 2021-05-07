import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBContainer,
  MDBAnimation
} from 'mdbreact';
import { appName, appTagline } from '../data/HomeData';
import '../css/Home.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import resume from "../assets/resume.pdf";

class Home extends React.Component {
  render() {
    return (
      <div id='apppage'>
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBMask className='flex-center' overlay="black-light" />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='7' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                    {appName}
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                    {appTagline}
                  </h6>

                  <AnchorLink className="btn btn-white" href="#projects">
                    <MDBIcon icon="terminal" />&nbsp;&nbsp;Explore
                  </AnchorLink>
                  <a className="btn btn-outline-white" href={resume} target="_blank">
                    Resume&nbsp;&nbsp;<MDBIcon icon="file-pdf" />
                  </a>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md='5' xl='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default Home;