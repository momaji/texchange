//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Button, Jumbotron, Image } from 'react-bootstrap';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

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
            personId: ""
        };
    }

    findInData(name, id) {
        var source = this.props.data[name];
        return source.filter(element => (element['id'] == id))[0];
    }

    componentDidMount() {
        var textbookData = this.findInData("textbooks",this.props.match.params.id);
        console.log(textbookData)
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
                personId: textbookData["personId"]
            });
    }

    getProfileLink() {
        return "/profile/" + this.state.personId;
    }

    getSearchUrl() {
        return "/search/" + this.state.id;
    }
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>{this.state.name}</h1>
                    <Link to={this.getSearchUrl()}>View all listings for this book</Link>
                </Jumbotron>
                <Row>
                    <Col>
                        <Image src={window.location.origin + this.state.src} height={360} />
                        <p>Author: {this.state.author}</p>
                        <p>Course: {this.state.course}</p>
                        <p>Published Date: {this.state.published}</p>
                    </Col>
                    <Col>
                        <h4><Link as={Link} to={this.getProfileLink()}>View Seller Profile</Link></h4>
                        <Row>
                            <Col>
                                <p>Review Score: {this.state.rating}</p>
                            </Col>
                            <Col>
                                <p>Location: {this.state.location}</p>
                            </Col>
                        </Row>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar et eros at sodales. Duis eleifend tincidunt enim vel ornare. Donec vehicula pharetra sollicitudin. Maecenas finibus commodo ornare. Sed commodo consequat facilisis. Vestibulum pulvinar, mi a sodales bibendum, sapien urna pellentesque tortor, quis aliquet metus magna nec nisi. Quisque suscipit libero a urna interdum, ut ullamcorper velit posuere. Maecenas justo ante, bibendum ac eros a, aliquam finibus sapien. Fusce aliquet, lorem id viverra laoreet, magna velit volutpat mi, ut sagittis ex odio quis mi. Proin tincidunt consequat nisi at egestas. Suspendisse feugiat mauris vitae dolor mattis mollis. Suspendisse ultricies lorem quis turpis porttitor gravida.</p>
                        <Row>
                            <Col>
                                <h3>Price: ${this.state.price}</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Listing;