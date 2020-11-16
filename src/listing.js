//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Button, Jumbotron, Image } from 'react-bootstrap';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar et eros at sodales. Duis eleifend tincidunt enim vel ornare. Donec vehicula pharetra sollicitudin. Maecenas finibus commodo ornare. Sed commodo consequat facilisis. Vestibulum pulvinar, mi a sodales bibendum, sapien urna pellentesque tortor, quis aliquet metus magna nec nisi. Quisque suscipit libero a urna interdum, ut ullamcorper velit posuere. Maecenas justo ante, bibendum ac eros a, aliquam finibus sapien. Fusce aliquet, lorem id viverra laoreet, magna velit volutpat mi, ut sagittis ex odio quis mi. Proin tincidunt consequat nisi at egestas. Suspendisse feugiat mauris vitae dolor mattis mollis. Suspendisse ultricies lorem quis turpis porttitor gravida.</p>


class Listing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: "",
            author: "",
            published: "",
            price: "",
            course: "",
            src: "",
            rating: "",
            location: "",
            personId: "",
            description: "",
            flexible: ""
        };
    }

    findInData(name, id) {
        var source = this.props.appData[name];
        return source.filter(element => (element['id'] == id))[0];
    }

    componentDidMount() {
        var textbookData = this.findInData("textbooks", this.props.match.params.id);
        this.setState
            ({
                id: this.props.match.params.id,
                name: textbookData["name"],
                author: textbookData["author"],
                published: textbookData["published"],
                price: textbookData["price"],
                course: textbookData["course"],
                src: textbookData["src"],
                rating: textbookData["rating"],
                location: textbookData["location"],
                personId: textbookData["personId"],
                description: textbookData["description"],
                flexible: textbookData["flexible"]
            });
    }

    getProfileLink() {
        return "/profile/" + this.state.personId;
    }

    getSearchUrl() {
        return "/search/" + this.state.id;
    }

    getMailToLink() {
        var person = this.findInData("people", this.state.personId);
        return "mailto:" + person["email"];
    }

    favouriteListing = id => () =>
    {
        this.props.addFavourite(id);
        this.props.editProfile();
    }

    unfavouriteListing = id => () =>
    {
        this.props.removeFavourite(id);
        this.props.editProfile();
    }

    render() {
        return (
            <Container align="center">
                <Jumbotron>
                    <h1>{this.state.name}</h1>
                    <Link to={this.getSearchUrl()}>View all listings for this book</Link>
                </Jumbotron>
                <Row className="mb-3">
                    <Col className="mb-3">
                        <Image src={this.state.src} width={420} height={540} />
                        <h3 className="mt-1">By: {this.state.author}</h3>
                        <p>Course: {this.state.course}, Published Date: {this.state.published}</p>
                    </Col>
                    <Col>
                        <h4><Link as={Link} to={this.getProfileLink()}>View Seller Profile</Link></h4>
                        <Row>
                            <Col>
                                <p>Seller Review Score: {this.state.rating}</p>
                            </Col>
                            <Col>
                                <p>Location: {this.state.location}</p>
                            </Col>
                        </Row>
                        <p>{this.state.description}</p>
                        <Row>
                            <Col>
                                <h3>Price: ${this.state.flexible? this.state.price+' - Flexible' : this.state.price}</h3>
                                <a href={this.getMailToLink()}>Contact Seller for Purchase</a><br></br><br></br>
                                {this.props.userFavourited.includes(parseInt(this.props.match.params.id)) ? <Button onClick={this.unfavouriteListing(parseInt(this.props.match.params.id))}>Unfavourite Listing</Button> : <Button onClick={this.favouriteListing(parseInt(this.props.match.params.id))}>Favourite Listing</Button>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Listing;
