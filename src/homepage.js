//The JS code for the Homepage React Component
import React from 'react';
import { Container, Row, Col, Dropdown, Form } from 'react-bootstrap';


class HomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            books: [],
            sortBy: "Price Lowest to Highest",
            locations: { cities: [], checked: [] },
            locationsChecked: [],
            ratingFilter: "All",
            priceFilter: "All"
        };
    }

    sortByClicked(sortString){
        console.log(this.state.locations);
        console.log(this.state.locationsChecked);
        this.setState( {sortBy: sortString} );
    }

    toggleCheckbox(city){
        // index = this.state.locations.indexOf(city);
        // boxes = this.state.locationsChecked;
        // boxes[index] = !boxes[index];
        // this.setState( { locationsChecked: boxes} );
    }

    componentDidMount(){
        var locationCopy = this.state.locations;
        locationCopy.cities = this.props.appData.locations;
        //for loop to set all checked to false
        //setstate with locations: locationCopy
        //this.setState( { locations: this.props.appData.locations, locationsChecked: checked } );
    }

    renderLocationCheckboxes(){
        return(<div>ff</div>);
    }


    render(){
        return(
            <Container fluid="true">
                <Row>
                    <Col sm={2}>
                        <h4>Filter By:</h4>
                    </Col>
                    <Col sm={5}>
                        <h4 id="numResults">{this.state.books.length} Results</h4>
                    </Col>
                    <Col sm={5}>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="sortDropdown">
                                Sort By: {this.state.sortBy}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={() => this.sortByClicked("Price Lowest to Highest")}>Price Lowest to Highest</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.sortByClicked("Price Highest to Lowest")}>Price Highest to Lowest</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.sortByClicked("Textbook Name A - Z")}>Textbook Name A - Z</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.sortByClicked("Textbook Name Z - A")}>Textbook Name Z - A</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} className="text-center">
                        <br />
                        <h6><u>Average Review</u></h6>
                        <a href="#" className="text-muted">☆☆☆☆ and up</a> <br />
                        <a href="#" className="text-muted">☆☆☆ and up</a> <br />
                        <a href="#" className="text-muted">☆☆ and up</a> <br />
                        <a href="#" className="text-muted">☆ and up</a> <br />
                        <br />
                        <h6><u>Price</u></h6>
                        <Form>
                            <Form.Check type="radio" label="Under $50" name="priceRadios"/>
                            <Form.Check type="radio" label="$50 - $100" name="priceRadios"/>
                            <Form.Check type="radio" label="Over $100" name="priceRadios"/>
                        </Form>
                        <br />
                        <h6><u>Location</u></h6>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;