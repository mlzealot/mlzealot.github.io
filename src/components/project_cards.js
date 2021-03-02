import React, { Component } from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCol, MDBRow, MDBIcon } from "mdbreact";
import '../css/cards.css';
import { projects } from "../data/project_card_data";
import '../css/style_common.css';

class ProjectCards extends Component{

    render() {
        return (
            <div>
                <div className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        My work
                    </h2>
                    <p className="w-responsive mx-auto mb-5">
                        Here are some of my best projects.
                    </p>
                </div>
                <MDBCardGroup>
                    {/* Loop through projects */}
                    {projects.map((project, index) => (
                        <MDBCol md="3" className="card-padding" key={index}>
                            <MDBCard>
                                <MDBCardImage src={project.image} alt="MDBCard image cap" top hover
                                    overlay="white-slight" />
                                <MDBCardBody>
                                    <MDBCardTitle tag="h5">{project.title}</MDBCardTitle>
                                    <MDBCardText>
                                        {project.description}
                                    </MDBCardText>
                                    <MDBBtn outline color="black" size="md">
                                        <MDBIcon fab icon={project.icon} />&nbsp;&nbsp;
                                        Read more
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBCardGroup>
            </div>
        );
    }
}

export default ProjectCards;