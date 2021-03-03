import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import avatar from "../assets/avatar256x256.jpg";
import { 
    aboutMeComponentTitle,
    aboutMeComponentDescription,
    myName, myTitle, myBio,
    aboutMeLinkArray
} from '../data/AboutMeData';

class AboutMe extends Component {
  render() {
    return (
        <div>
            {/* my -> move in y-axis -> increase the number to make it go up in pixels
            px -> shrink in x-axis -> increase the number to increase padding and decrease content width
            pb -> Keep it at 4 I guess?
            */}
            <MDBCard className="my-0 px-5 pb-4">
                <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-4 text-center">
                    {aboutMeComponentTitle}
                </h2>
                <p className="w-responsive mx-auto mb-5 text-center">
                    {aboutMeComponentDescription}
                </p>
                <MDBRow>
                    <MDBCol md="4" className="mb-lg-0 mb-5 text-center">
                        <img src={avatar} className="img-fluid z-depth-1 rounded-circle" alt="" />
                        <ul className="list-unstyled mb-0" style={{paddingTop:"2rem"}}>
                            {aboutMeLinkArray.map((social) => (
                                <a href={social.social_url} className="p-2 fa-2x" target="_blank"
                                    key={social.social_id}
                                >
                                    <MDBIcon fab icon={social.social_icon} className={social.color_class} />
                                </a>
                            ))}
                        </ul>
                    </MDBCol>
                    <MDBCol md="8" className="mb-lg-0 mb-5">
                        <h5 className="font-weight-bold mt-4 mb-3">{myName}</h5>
                        <p className="text-uppercase blue-text">{myTitle}</p>
                        <p style={{textAlign: "justify"}}>
                            {myBio}
                        </p>
                    </MDBCol>
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
  }
}

export default AboutMe;