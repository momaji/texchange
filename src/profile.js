//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { GoPencil } from 'react-icons/go';

const thirdExample = {
    size: 40,
    count: 5,
    isHalf: false,
    color: "#f3969a",
    activeColor: "#78c2ad",
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
    }
  };

class Profile extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            profileID: this.props.match.params.id,
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            number: "",
            location: "",
            image: "",
            rating: 0,
            books: [],
            favourited: [],
            ratingSubmitted: false
        };

        this.closeAlert = this.closeAlert.bind(this);
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
        var numStars;

        for (var i = 0; i < profileData["books"].length; i++)
        {
            bookList.push(this.findInData("textbooks", profileData["books"][i]));
        }

        for (var j = 0; j < profileData["favourited"].length; j++)
        {
            favouritedList.push(this.findInData("textbooks", profileData["favourited"][j]));
        }

        switch(profileData["rating"])
        {
            case "★★★★★":
                numStars = 5;
                break;
            case "★★★★☆":
                numStars = 4;
                break;
            case "★★★☆☆":
                numStars = 3;
                break;       
            case "★★☆☆☆":
                numStars = 2;
                break;    
            case "★☆☆☆☆":
                numStars = 1;
                break; 
            default:
                numStars = 4;
        }

        this.setState
        ({
            profileID: this.props.match.params.id,
            firstName: profileData["firstName"],
            lastName: profileData["lastName"],
            gender: profileData["gender"],
            email: profileData["email"],
            number: profileData["phone"],
            location: profileData["location"],
            image: profileData["avatar"],
            rating: numStars,
            books: bookList,
            favourited: favouritedList
        });  
    }

    getBookUrl(book) 
    {
        return "/books/" + book["id"];
    }

    changeRating = (newValue) => 
    {
        this.setState({rating: newValue, ratingSubmitted: true});
    }

    renderAlert()
    {
        if(this.state.ratingSubmitted){
          return(
            <Alert variant="success">Thank you for your rating. We will review it and adjust the average accordingly.<button type="button" onClick={this.closeAlert} class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></Alert>
          );
        }
    }

    closeAlert()
    {
        this.setState({ratingSubmitted: false});
    }

    editFields()
    {
        console.log("hi");
    }
    
    render()
    {
        console.log(this.state.rating);
        return (
            <Container fluid="true">  
                {this.renderAlert()}
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h1 className="float-left">{this.state.firstName} {this.state.lastName}'s Profile 
                        {this.state.profileID == 0 && <span onClick={this.editFields} style={{paddingLeft: "25px"}}><GoPencil></GoPencil></span>}</h1>
                        <h2 className="float-right">Seller Rating:
                        {this.state.rating != 0 && this.state.profileID != 0 && <ReactStars {...thirdExample} value={this.state.rating} onChange={this.changeRating} />}
                        {this.state.rating != 0 && this.state.profileID == 0 && <ReactStars {...thirdExample} value={this.state.rating} edit={false} />}</h2>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <Image rounded thumbnail className="float-left" src={this.state.image} alt={this.state.firstName} width="350" height="350"></Image>
                        <div style={{paddingTop: "17px"}}>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><span className="font-weight-bold">Full Name: </span>{this.state.firstName} {this.state.lastName}</h4><br></br><br></br><br></br>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><span className="font-weight-bold">Gender: </span>{this.state.gender}</h4><br></br><br></br><br></br>
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