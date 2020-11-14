//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Dropdown, Form, Image } from 'react-bootstrap';


class Listing extends React.Component{

    constructor(props)
    {
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
            location: "" 
        };
    }

    componentDidMount()
    {
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
            location: this.props.data["location"]
        });
    }   

    render()
    {
        return (
            <Container fluid="true">
                <Row>
                    <Col>
                        <h1>REEREARA</h1>
                        <p>{this.state.name}</p>
                        <p>{this.state.author}</p>
                        <p>{this.state.published}</p>
                        <p>{this.state.price}</p>
                        <p>{this.state.course}</p>
                        <p>{this.state.src}</p>
                        <p>{this.state.rating}</p>
                        <p>{this.state.location}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Listing;