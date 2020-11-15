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
        this.setState({editable: !this.state.editable});
        this.props.editProfile();
    }

    render()
    {
        let profile = this.props.appData.people.filter(person => person.id == this.props.match.params.id )[0]
        let bookList2 = this.props.appData.textbooks.filter(book => book.personId == this.props.match.params.id )

        return (
            <Container fluid="true">
                {this.renderAlert()}
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h1 className="float-left">{profile.firstName} {profile.lastName}'s Profile
                            {profile.id === 0 && <Button className={!this.state.editable ? "" : "btn-secondary"} onClick={this.editFields.bind(this)} style={{marginLeft: "25px"}} size="lg">
                            {!this.state.editable ? <FaPencilAlt></FaPencilAlt> : <FaRegSave></FaRegSave>}</Button>}
                        </h1>
                        <h2 className="float-right">Seller Rating:
                            {this.state.rating !== 0 && profile.id !== 0 && <ReactStars {...thirdExample} value={this.state.rating} onChange={this.changeRating} />}
                            {this.state.rating !== 0 && profile.id === 0 && <ReactStars {...thirdExample} value={this.state.rating} edit={false} />}
                        </h2>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        {this.state.editable ? <Form inline><Form.Label>Upload a different picture</Form.Label><Form.Control type="file" onChange={this.props.editPic}></Form.Control></Form>: <Image rounded thumbnail className="float-left" src={profile.avatar} alt={profile.firstName} width="350" height="350"></Image>}

                        <div style={{paddingTop: "17px"}}>
                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Full Name:&nbsp;</Form.Label>
                                {this.state.editable ? <div><Form.Control defaultValue={this.props.firstName} type="input" value={this.props.firstName} onChange={this.props.editFirstName}></Form.Control>
                                <Form.Control defaultValue={this.props.lastName} type="input" value={this.props.lastName} onChange={this.props.editLastName}></Form.Control></div>
                                : profile.firstName + " " + profile.lastName}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Gender:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.props.gender} as="select" value={this.props.gender} onChange={this.props.editGender}>
                                <option>Male</option><option>Female</option><option>Other</option></Form.Control> : profile.gender}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Email:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.props.email} type="input" value={this.props.email} onChange={this.props.editEmail}>
                                </Form.Control> : profile.email}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Phone Number:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.props.phone} type="input" value={this.props.phone} onChange={this.props.editPhone}>
                                </Form.Control> : profile.phone}</Form>
                            </h4><br></br><br></br><br></br>

                            <h4 style={{paddingLeft: "20px"}} className="float-left"><Form inline><Form.Label className="font-weight-bold">Location:&nbsp;</Form.Label>
                                {this.state.editable ? <Form.Control defaultValue={this.props.location} type="input" value={this.props.location} onChange={this.props.editLocation}>
                                </Form.Control> : profile.location}</Form>
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
                        <h1 className="float-left">{profile.id === 0 ? "Your" : profile.firstName + "'s"} Textbooks For Sale</h1>
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
                                        <Image src={book.src} height={180} width={140} />
                                        <p></p>
                                        <Link exact to={this.getBookUrl(book)}>View Listing</Link><br></br>
                                        <span className="font-weight-bold">{book.name}</span>
                                        <p>{book.author}</p>
                                        <p>${book.flexible? book.price+' - Flexible' : book.price}</p>
                                        {profile.id === 0 && <p><Button onClick={() => this.props.openEditModal(book.id) } >Edit</Button></p>}
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
                        <h1 className="float-left">{profile.id === 0 ? "Your" : profile.firstName + "'s"} Favourited Textbooks</h1>
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
                                    <Image src={book.src} height={180} width={140} />
                                    <p></p>
                                    <Link exact to={this.getBookUrl(book)}>View Listing</Link><br></br>
                                    <span className="font-weight-bold">{book.name}</span>
                                    <p>{book.author}</p>
                                    <p>${book.flexible? book.price + ' - Flexible' : book.price}</p>
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
