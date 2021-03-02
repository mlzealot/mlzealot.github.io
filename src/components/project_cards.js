import React, { Component } from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCol } from "mdbreact";
import '../css/cards.css';


class ProjectCards extends Component{

    state = {
        title1 : 'Housing Prices Advanced',
        title2 : 'Data Explorer',
        title3 : 'YouTube Sentiment Analysis'
    };

    render() {
        return (
            <MDBCardGroup>
                <MDBCol md="4" className="card-padding">
                    <MDBCard>
                        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
                            overlay="white-slight" />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">{this.state.title1}</MDBCardTitle>
                            <MDBCardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                            read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
        
                <MDBCol md="4" className="card-padding">
                    <MDBCard>
                        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="MDBCard image cap" top hover
                            overlay="white-slight" />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">{this.state.title2}</MDBCardTitle>
                            <MDBCardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                            read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
        
                <MDBCol md="4" className="card-padding">
                    <MDBCard>
                        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="MDBCard image cap" top hover
                            overlay="white-slight" />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">{this.state.title3}</MDBCardTitle>
                            <MDBCardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                            read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCardGroup>
          );
    }
}

export default ProjectCards;