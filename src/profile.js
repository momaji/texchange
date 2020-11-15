//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';

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

        var bookList = [];
        var favouritedList = [];

        for (var i = 0; i < profileData["books"].length; i++)
        {
            bookList.push(this.findInData("textbooks", profileData["books"][i]));
        }

        for (var j = 0; j < profileData["favourited"].length; j++)
        {
            favouritedList.push(this.findInData("textbooks", profileData["favourited"][j]));
        }

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
            books: bookList,
            favourited: favouritedList
        });  
    }

    getBookUrl(book) 
    {
        return "/books/" + book["id"];
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
                        <h1 className="float-left">{this.state.firstName}'s Textbooks For Sale</h1>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    </Col> 
                    <Col sm={10}>  
                        <Row>
                            {this.state.books.map((book, index) =>
                                    <Col sm={2} className="mt-2 mb-2 ml-3 mr-3 SearchBookIcon" key={index}><br></br>
                                        <Image src={window.location.origin + book.src} height={180} />
                                        <p></p>
                                        <Link exact to={this.getBookUrl(book)}>View Listing</Link><br></br>
                                        <span>{book.name}</span><br></br>
                                        <span>{book.author}</span>
                                        <p>${book.price}</p>
                                    </Col>
                                )} 
                        </Row> 
                    </Col> 
                    <Col sm={1}>
                    </Col>
                </Row><br></br><br></br>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h1 className="float-left">{this.state.firstName}'s Favourited Textbooks</h1>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            {this.state.favourited.map((book, index) =>
                                <Col sm={2} className="mt-2 mb-2 ml-3 mr-3 SearchBookIcon" key={index} ><br></br>
                                    <Image src={window.location.origin + book.src} height={180} />
                                    <p></p>
                                    <Link exact to={this.getBookUrl(book)}>View Listing</Link><br></br>
                                    <span>{book.name}</span><br></br>
                                    <span>{book.author}</span>
                                    <p>${book.price}</p>
                                </Col>
                            )}
                        </Row>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;