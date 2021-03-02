import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from 'mdbreact';
import '../css/AppPage.css';

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
                    ML Dojo
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                    Machine Learning and Data Science Simplified.
                  </h6>
                  <MDBBtn color='white'>Download</MDBBtn>
                  <MDBBtn outline color='white'>
                    Learn More
                  </MDBBtn>
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
  // 'https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
}

export default Home;