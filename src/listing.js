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
            id: "",
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

    componentDidMount() {
        this.setState
            ({
                id: this.props.data.id["id"],
                name: this.props.data["name"],
                author: this.props.data["author"],
                published: this.props.data["published"],
                price: this.props.data["price"],
                course: this.props.data["course"],
                src: this.props.data["src"],
                rating: this.props.data["rating"],
                location: this.props.data["location"],
                personId: this.props.data["personId"]
            });
    }

    getProfileLink() {
        return "/profile/" + this.state.personId;
    }
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>{this.state.name}</h1>
                </Jumbotron>
                <Row>
                    <Col>
                        <Image src={window.location.origin + this.state.src} height={360} />
                        <p>Author: {this.state.author}</p>
                        <p>Course: {this.state.course}</p>
                        <p>Published Date: {this.state.published}</p>
                    </Col>
                    <Col>
                        <h4>Seller</h4>
                        <Row>
                            <Col>
                                <Link as={Link} to={this.getProfileLink()}>View Seller Profile</Link>
                            </Col>
                            <Col>
                                <p>Review Score: {this.state.rating}</p>
                            </Col>
                        </Row>
                        <p>Sellers Notes</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar et eros at sodales. Duis eleifend tincidunt enim vel ornare. Donec vehicula pharetra sollicitudin. Maecenas finibus commodo ornare. Sed commodo consequat facilisis. Vestibulum pulvinar, mi a sodales bibendum, sapien urna pellentesque tortor, quis aliquet metus magna nec nisi. Quisque suscipit libero a urna interdum, ut ullamcorper velit posuere. Maecenas justo ante, bibendum ac eros a, aliquam finibus sapien. Fusce aliquet, lorem id viverra laoreet, magna velit volutpat mi, ut sagittis ex odio quis mi. Proin tincidunt consequat nisi at egestas. Suspendisse feugiat mauris vitae dolor mattis mollis. Suspendisse ultricies lorem quis turpis porttitor gravida. Maecenas ut pharetra mauris, eu volutpat ex. Ut faucibus mi in dolor rutrum, non bibendum lectus bibendum. Vestibulum mattis vestibulum suscipit.</p>
                        <p>Location: {this.state.location}</p>
                        <p>Price: ${this.state.price}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Listing;