//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


class Profile extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            profileID: "",
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            location: "",
            image: ""
        };
    }

    componentDidMount()
    {
        this.setState
        ({     
            profileID: this.props.data["id"],     
            firstName: this.props.data["firstName"],
            lastName: this.props.data["lastName"],
            email: this.props.data["email"],
            number: this.props.data["phone"],
            location: this.props.data["location"],
            image: this.props.data["avatar"]
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
                            <h4 style={{paddingLeft: "20px"}}className="float-left"><span className="font-weight-bold">First Name: </span>{this.state.firstName}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}}className="float-left"><span className="font-weight-bold">Last Name: </span>{this.state.lastName}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}}className="float-left"><span className="font-weight-bold">Email Name: </span>{this.state.email}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}}className="float-left"><span className="font-weight-bold">Phone Number: </span>{this.state.number}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}}className="float-left"><span className="font-weight-bold">Location: </span>{this.state.location}</h4><br></br><br></br><br></br>
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
                        <h2 className="float-left">{this.state.firstName}'s Favourited Listings</h2>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;