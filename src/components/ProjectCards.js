import React, { Component } from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCol, MDBRow, MDBIcon } from "mdbreact";
import '../css/cards.css';
import { componentTitle, componentDescription, projectJsonArray } from "../data/ProjectData";
import '../css/style_common.css';

class ProjectCards extends Component{

    render() {
        return (
            <div>
                <div className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-4">
                        {componentTitle}
                    </h2>
                    <p className="w-responsive mx-auto mb-5 black-text">
                        {componentDescription}
                    </p>
                </div>
                <MDBCardGroup>
                    {/* Loop through projects */}
                    {projectJsonArray.map((project) => (
                        <MDBCol md="3" className="card-padding" key={project.id}>
                            <MDBCard>
                                <MDBCardImage src={project.image} alt="MDBCard image cap" top hover
                                    overlay="white-slight" alt="Oops!" />
                                <MDBCardBody>
                                    <MDBCardTitle tag="h5">{project.title}</MDBCardTitle>
                                    <MDBCardText>
                                        {project.description}
                                    </MDBCardText>
                                    {/* Loop through links in each project */}
                                    {project.links.map((link) => (
                                        <MDBBtn outline color="black" size="md" 
                                            href={link.url} target="_blank" 
                                            className="black-text">
                                                <MDBIcon fab icon={link.icon} />&nbsp;
                                                {link.button_text}
                                        </MDBBtn>
                                    ))}
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