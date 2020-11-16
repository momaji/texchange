//The JS code for the Homepage React Component
import React from 'react';
import { Container, Row, Col, Dropdown, Form, Image } from 'react-bootstrap';
import {
    HashRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import Listing from './listing.js';



class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            sortBy: "Price Lowest to Highest",
            locations: { cities: [] },
            courses: { course: [] },
            ratingFilter: "All",
            priceFilter: "All",
            locationFilter: "All",
            courseFilter: "All",
            searchKey: "",
            exactSearchKey: ""
        };

        if(props.search){
            var textbookData = this.findInData("textbooks",this.props.match.params.id);
            this.state.exactSearchKey = textbookData["name"]; //search for this name exactly, ideally would be isbn
        }
    }

    findInData(name, id) {
        var source = this.props.appData[name];
        return source.filter(element => (element['id'] == id))[0];
    }

    sortByClicked(sortString) {
        this.setState({ sortBy: sortString });
    }

    togglePriceFilter(currentPriceFilter) {
        this.setState({ priceFilter: currentPriceFilter });
    }

    toggleRatingFilter(currentRating) {
        this.setState({ ratingFilter: currentRating });
    }

    toggleLocationCheckbox(city) {
        this.setState({ locationFilter: city });
    }

    toggleCourseCheckbox(course) {
        this.setState({ courseFilter: course });
    }

    searchBooks(book) {
        this.setState({ searchKey: book }); //I think we should make this append something to the URL, so people can share searches
    }

    //Filter then sort books based on the state filter status
    static getDerivedStateFromProps(props, state) {
        var filteredBooks = props.appData.textbooks;

        if (state.ratingFilter !== "All") {
            if (state.ratingFilter === "4+") {
                filteredBooks = filteredBooks.filter((book) => book.rating.length >= 4);
            } else if (state.ratingFilter === "3+") {
                filteredBooks = filteredBooks.filter((book) => book.rating.length >= 3);
            } else if (state.ratingFilter === "2+") {
                filteredBooks = filteredBooks.filter((book) => book.rating.length >= 2);
            } else if (state.ratingFilter === "1+") {
                filteredBooks = filteredBooks.filter((book) => book.rating.length >= 1);
            }
        }
        if (state.priceFilter !== "All") {
            if (state.priceFilter === "Under $50") {
                filteredBooks = filteredBooks.filter((book) => book.price < 50);
            } else if (state.priceFilter === "$50 - $100") {
                filteredBooks = filteredBooks.filter((book) => book.price >= 50 && book.price <= 100);
            } else if (state.priceFilter === "Over $100") {
                filteredBooks = filteredBooks.filter((book) => book.price > 100);
            }
        }
        if (state.courseFilter !== "All") {
            filteredBooks = filteredBooks.filter((book) => book.course === state.courseFilter);
        }
        if (state.locationFilter !== "All") {
            filteredBooks = filteredBooks.filter((book) => book.location === state.locationFilter);
        }


        var sortFunction;

        if (state.sortBy === "Price Lowest to Highest") {
            sortFunction = function (bookA, bookB) { return bookA.price - bookB.price };
        } else if (state.sortBy === "Price Highest to Lowest") {
            sortFunction = function (bookA, bookB) { return bookB.price - bookA.price };
        } else if (state.sortBy === "Textbook Name A - Z") {
            sortFunction = function (bookA, bookB) {
                if (bookA.name < bookB.name) return -1;
                if (bookB.name < bookA.name) return 1;
                return 0;
            };
        } else if (state.sortBy === "Textbook Name Z - A") {
            sortFunction = function (bookA, bookB) {
                if (bookA.name < bookB.name) return 1;
                if (bookB.name < bookA.name) return -1;
                return 0;
            };
        } else if (state.sortBy === "Author Name A - Z") {
            sortFunction = function (bookA, bookB) {
                if (bookA.author < bookB.author) return -1;
                if (bookB.author < bookA.author) return 1;
                return 0;
            };
        } else if (state.sortBy === "Author Name Z - A") {
            sortFunction = function (bookA, bookB) {
                if (bookA.author < bookB.author) return 1;
                if (bookB.author < bookA.author) return -1;
                return 0;
            };
        }

        filteredBooks.sort(sortFunction);

        if (state.searchKey !== "") {
            filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(state.searchKey.toLowerCase()));
        }

        //lets hope this works well
        if (state.exactSearchKey !== "") {
            filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase() == (state.exactSearchKey.toLowerCase()));
        }

        return { books: filteredBooks };
    }

    componentDidMount() {

        //Dynamically set location checkboxes to info in data.js
        var locationCopy = this.state.locations;
        locationCopy.cities = this.props.appData.locations;
        this.setState({ locations: locationCopy });

        //Dynamically set course checkboxes to info in data.js
        var courseCopy = this.state.courses;
        courseCopy.course = this.props.appData.classes;
        this.setState({ courses: courseCopy });

        //Set state of textbooks from props passed
        var textbooksCopy = this.props.appData.textbooks;
        textbooksCopy.sort(function (bookA, bookB) { return bookA.price - bookB.price });
        this.setState({ books: textbooksCopy });
    }

    getBookUrl(book) {
        return "/books/" + book["id"];
    }

    renderLocationCheckboxes() {
        var locationsToRender = this.state.locations.cities;
        return (
            <div>
                {locationsToRender.map(
                    (city, index) => <Form.Check type="radio" name="locationRadios" label={city} key={index} onChange={this.toggleLocationCheckbox.bind(this, city)} />
                )}
                <Form.Check type="radio" name="locationRadios" label="All Books" onChange={this.toggleLocationCheckbox.bind(this, "All")} checked={this.state.locationFilter === "All"} />
            </div>
        )
    }

    renderCourseCheckboxes() {
        var coursesToRender = this.state.courses.course;
        return (
            <div>
                {coursesToRender.map(
                    (course, index) => <Form.Check type="radio" name="courseRadios" label={course} key={index} onChange={this.toggleCourseCheckbox.bind(this, course)} />
                )}
                <Form.Check type="radio" name="courseRadios" label="All Books" onChange={this.toggleCourseCheckbox.bind(this, "All")} checked={this.state.courseFilter === "All"} />
            </div>
        )
    }

    renderBooks() {
        return (
            <Row>
                {this.state.books.map(
                    (book, index) =>
                        <Col sm={2} className="mt-2 mb-2 ml-3 mr-3 SearchBookIcon" key={index} >
                            <span>Average Seller Review:</span><p>{book.rating}</p>
                            <Image src={book.src} height={180} width={140} />
                            <p></p>
                            <Link exact to={this.getBookUrl(book)}>View Listing</Link><br></br>
                            <span className="font-weight-bold">{book.name}</span>
                            <p>{book.author}</p>
                            <p>$ {book.flexible? book.price+' - Flexible' : book.price }</p>
                        </Col>
                )}
            </Row>
        );
    }

    render() {
        return (
            <Container fluid="true">
                <br></br>
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
                                <Dropdown.Item href="#" onClick={() => this.sortByClicked("Author Name A - Z")}>Author Name A - Z</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.sortByClicked("Author Name Z - A")}>Author Name Z - A</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row><br /></Row>
                <Row>
                    <Col sm={2} className="text-center ScrollingContainer">
                        <h6><u>Average Seller Review</u></h6>
                        <a href="#" className="text-muted" onClick={() => this.toggleRatingFilter("4+")}>★★★★☆ and up</a> <br />
                        <a href="#" className="text-muted" onClick={() => this.toggleRatingFilter("3+")}>★★★☆☆ and up</a> <br />
                        <a href="#" className="text-muted" onClick={() => this.toggleRatingFilter("2+")}>★★☆☆☆ and up</a> <br />
                        <a href="#" className="text-muted" onClick={() => this.toggleRatingFilter("1+")}>★☆☆☆☆ and up</a> <br />
                        <br />
                        <h6><u>Price</u></h6>
                        <Form>
                            <Form.Check type="radio" label="Under $50" name="priceRadios" onChange={() => this.togglePriceFilter("Under $50")} />
                            <Form.Check type="radio" label="$50 - $100" name="priceRadios" onChange={() => this.togglePriceFilter("$50 - $100")} />
                            <Form.Check type="radio" label="Over $100" name="priceRadios" onChange={() => this.togglePriceFilter("Over $100")} />
                            <Form.Check type="radio" label="All" name="priceRadios" onChange={() => this.togglePriceFilter("All")} checked={this.state.priceFilter === "All"} />
                        </Form>
                        <br />
                        <h6><u>Seller Location</u></h6>
                        {this.renderLocationCheckboxes()}
                        <br />
                        <h6><u>Courses</u></h6>
                        {this.renderCourseCheckboxes()}
                    </Col>
                    <Col sm={9} className="mr-1 border border-primary ScollingContainer">
                        {this.renderBooks()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;
