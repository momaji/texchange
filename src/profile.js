//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Image, Alert, Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaPencilAlt, FaRegSave } from 'react-icons/fa';

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
            ratingSubmitted: false,
            editable: false
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
        var bookList = this.props.appData.textbooks.filter(book => book.personId == this.state.profileID);
        var favouritedList = [];
        var numStars;

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
            <Alert variant="success">Thank you for your rating. We will review it and adjust the average accordingly.
            <button type="button" onClick={this.closeAlert.bind(this)} class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></Alert>
          );
        }
    }

    closeAlert()
    {
        this.setState({ratingSubmitted: false});
    }

    editFields()
    {
        this.setState
        ({
            editable: !this.state.editable,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            email: this.state.email,
            number: this.state.number,
            location: this.state.location,
            image: this.state.image
        });
    }

    render(){
    let bookList2 = this.props.appData.textbooks.filter(book => book.personId == this.state.profileID )

        return (
            <Container fluid="true">
                {this.renderAlert()}
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h1 className="float-left">{this.state.firstName} {this.state.lastName}'s Profile
                            {this.state.profileID === "0" && <Button className={!this.state.editable ? "" : "btn-secondary"} onClick={this.editFields.bind(this)} style={{marginLeft: "25px"}} size="lg">
                            {!this.state.editable ? <FaPencilAlt></FaPencilAlt> : <FaRegSave></FaRegSave>}</Button>}
                        </h1>
                        <h2 className="float-right">Seller Rating:
                            {this.state.rating !== 0 && this.state.profileID !== "0" && <ReactStars {...thirdExample} value={this.state.rating} onChange={this.changeRating} />}
                            {this.state.rating !== 0 && this.state.profileID === "0" && <ReactStars {...thirdExample} value={this.state.rating} edit={false} />}
                        </h2>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        {this.state.editable ? <Form inline><Form.Label>Upload a different picture</Form.Label><Form.Control type="file" onChange={(event) => this.setState({image: URL.createObjectURL(event.target.files[0])})}></Form.Control></Form>: <Image rounded thumbnail className="float-left" src={this.state.image} alt={this.state.firstName} width="350" height="350"></Image>}

                        <div style={{paddingTop: "17px"}}>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Full Name:&nbsp;</Form.Label>
                                {this.state.editable ? <div><Form.Control defaultValue={this.state.firstName} type="input" value={this.state.firstName} onChange={(event) => this.setState({firstName: event.target.value})}></Form.Control>
                                <Form.Control defaultValue={this.state.lastName} type="input" value={this.state.lastName} onChange={(event) => this.setState({lastName: event.target.value})}></Form.Control></div>
                                : this.state.firstName + " " + this.state.lastName}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Gender:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.state.gender} as="select" value={this.state.gender} onChange={(event) => this.setState({gender: event.target.value})}>
                                <option>Male</option><option>Female</option><option>Other</option></Form.Control> : this.state.gender}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Email:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.state.email} type="input" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}>
                                </Form.Control> : this.state.email}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Phone Number:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.state.number} type="input" value={this.state.number} onChange={(event) => this.setState({number: event.target.value})}>
                                </Form.Control> : this.state.number}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Location:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.state.location} type="input" value={this.state.location} onChange={(event) => this.setState({location: event.target.value})}>
                                </Form.Control> : this.state.location}</Form>
                            </h4><br></br><br></br><br></br>
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
                            {bookList2.map((book, index) =>
                                    <Col sm={2} className="mt-2 mb-2 ml-3 mr-3 SearchBookIcon" key={index}><br></br>
                                        <Image src={book.src} height={180} />
                                        <p></p>
                                        <Link exact to={this.getBookUrl(book)}>View Listing</Link><br></br>
                                        <span>{book.name}</span><br></br>
                                        <span>{book.author}</span>
                                        <p>${book.price}</p>
                                        {this.state.profileID === "0" && <Button onClick={() => this.props.openEditModal(book.id) } >Edit</Button>}
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
