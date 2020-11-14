//The JS code for the Profile React Component
import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';


class Profile extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            profileID: this.props.match.params.id,
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            location: "",
            image: "",
            rating: "",
            books: [],
            favourited: []
        };
    }

    findInData(name, id) 
    {
        var source = this.props.appData[name];
        return source.filter(element => (element['id'] == id))[0];
    }

    componentDidMount()
    {
        var profileData = this.findInData("people", this.props.match.params.id);
        this.setState
        ({     
            profileID: this.props.match.params.id,   
            firstName: profileData["firstName"],
            lastName: profileData["lastName"],
            email: profileData["email"],
            number: profileData["phone"],
            location: profileData["location"],
            image: profileData["avatar"],
            rating: profileData["rating"],
            books: profileData["books"],
            favourited: profileData["favourited"]
        });
    }   

    render()
    {   
        return (
            <Container fluid="true">
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h1 className="float-left">{this.state.firstName} {this.state.lastName}'s Profile</h1>
                        <h2 className="float-right" style={{paddingLeft: "30px"}}>Average Rating: {this.state.rating}</h2>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row><br></br> 
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <Image rounded thumbnail className="float-left" src={this.state.image} alt={this.state.firstName} width="350" height="350"></Image>
                        <div style={{paddingTop: "17px"}}>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><span className="font-weight-bold">First Name: </span>{this.state.firstName}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><span className="font-weight-bold">Last Name: </span>{this.state.lastName}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><span className="font-weight-bold">Email Name: </span>{this.state.email}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><span className="font-weight-bold">Phone Number: </span>{this.state.number}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><span className="font-weight-bold">Location: </span>{this.state.location}</h4><br></br><br></br><br></br>
                        </div>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h2 className="float-left">{this.state.firstName}'s Textbooks For Sale</h2>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;