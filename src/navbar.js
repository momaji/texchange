import React from 'react';
import logo from './texchange_logo.png';
import data from './data.js'
import HomePage from './homepage.js';
import Profile from './profile.js';
import { IoIosAddCircle } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { Navbar, Nav, Form, Button, FormControl, Image, Alert } from 'react-bootstrap';
import Listing from './listing.js';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class TexNavbar extends React.Component{
  constructor(props){
    super(props);
    this.homePageRef = React.createRef();

    this.state={ searchKey: "", nullRefAlert: false };

  }

  createListing(){
    let info= { "name": "textbook", "author": "moziah", "published": "2002-03-21", "price": 10, "course": "BIO 1B03", "src": "/image/bio_2.jpg", "rating": "☆☆☆", "location": "Brampton" }
    this.props.createListing(info)

  }

  handleSearchChange(event){
    //console.log(event.target.value);
    this.setState( { searchKey: event.target.value } );
  }

  handleSearchClick(){
    if(this.homePageRef.current !== null){
      this.setState( {nullRefAlert: false} );
      this.homePageRef.current.searchBooks(this.state.searchKey);
    }else{
      console.log("no homepage ref");
      this.setState( {nullRefAlert: true} );
    }
  }

  handleProfileClick(){
    this.setState( {nullRefAlert: false} );
  }

  renderAlert(){
    if(this.state.nullRefAlert){
      return(
        <Alert variant="danger">Looking for a book? Click Search again to begin!</Alert>
      );
    }
  }



  render(){
    return(
      <Router>
        <div>
          <Navbar collapseOnSelect sticky="top" bg="primary" variant="dark">
            <Navbar.Brand as={NavLink} exact to="/" href="#home">
              <Image
                alt={""}
                src={logo}
                width={"30"}
                height={"30"}
                className={"d-inline-block align-top"}
              />{' '}
              <u>TexChange</u>
            </Navbar.Brand>
            <Form inline>
              <FormControl type="text" placeholder="Search for Textbooks" className="mr-sm-2" onChange={this.handleSearchChange.bind(this)} />
              <Button as={NavLink} exact to ="/" href="#home" className="tn btn-secondary my-2 my-sm-0" onClick={this.handleSearchClick.bind(this)}>Search</Button>
            </Form>
            <Button onClick={this.props.openModal}className="ml-auto">Sell a texbook <IoIosAddCircle/></Button>
            <Nav className="mr-sm-0">
              <Nav.Link as={NavLink} to="/profile/3"><Button onClick={this.handleProfileClick.bind(this)}>Hello, Paul <BsFillPersonFill/></Button></Nav.Link>
            </Nav>
          </Navbar>
          {this.renderAlert()}
          <br />
          <Route exact path="/" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} />} />
          <Route exact path="/profile/3" render={(props) => <Profile {...props} appData={data} id={3} />} />
          <Route path="/books/0" render={(props) => <Listing {...props} data={{ "name": "Biology - Concepts and Connections", "author": "Campbell", "published": "1990-01-01", "price": 40, "course": "BIO 1A03", "src": "/image/bio_1.jpg", "rating": "☆☆☆☆" , "location": "Hamilton", "id": 0}} />}></Route>
          <Route path="/books/1" render={(props) => <Listing {...props} data={{ "name": "Biology", "author": "Brooker", "published": "2002-03-21", "price": 60, "course": "BIO 1B03", "src": "/image/bio_2.jpg", "rating": "☆☆☆", "location": "Brampton", "id": 1 }}/>}></Route>
          <Route path="/books/2" render={(props) => <Listing {...props} data={{ "name": "Human Biology", "author": "Michael D. Johnson", "published": "2008-03-21", "price": 90, "course": "BIO 3HB3", "src": "/image/bio_3.jpg", "rating": "☆☆", "location": "Toronto", "id": 2 }} />}></Route>
          <Route path="/books/3" render={(props) => <Listing {...props} data={{ "name": "Exploring Biology in the Labratory", "author": "John L. Crawley", "published": "2018-06-14", "price": 110, "course": "BIO 2LA3", "src": "/image/bio_4.jpg", "rating": "☆☆☆☆☆", "location": "Brampton", "id": 3 }} />}></Route>
          <Route path="/books/4" render={(props) => <Listing {...props} data={{ "name": "Organic Chemistry", "author": "Michael B. Smith", "published": "2000-11-04", "price": 40, "course": "CHEM 2OC3", "src": "/image/chemistry_1.jpg", "rating": "☆", "location": "Hamilton", "id": 4 }} />}></Route>
          <Route path="/books/5" render={(props) => <Listing {...props} data={{ "name": "Conceptual Chemistry", "author": "John Suchocki", "published": "2008-03-21", "price": 60, "course": "CHEM 3CC3", "src": "/image/chemistry_2.jpg", "rating": "☆☆☆", "location": "Hamilton", "id": 5 }} />}></Route>
          <Route path="/books/6" render={(props) => <Listing {...props} data={{ "name": "Physical Chemistry of Polymers", "author": "Sebastian Seiffert", "published": "2013-02-19", "price": 95, "course": "CHEM 4P03", "src": "/image/chemistry_3.jpg", "rating": "☆☆☆☆", "location": "Brampton", "id": 6 }} />}></Route>
          <Route path="/books/7" render={(props) => <Listing {...props} data={{ "name": "Organic Chemistry 2", "author": "Francis A. Carey", "published": "2017-08-20", "price": 115, "course": "CHEM 2CO3", "src": "/image/chemistry_4.jpg", "rating": "☆☆☆☆☆", "location": "Toronto", "id": 7 }} />}></Route>
          <Route path="/books/8" render={(props) => <Listing {...props} data={{ "name": "Mathematics", "author": "Holt", "published": "2002-12-05", "price": 45, "course": "MATH 1XA3", "src": "/image/math_1.jpg", "rating": "☆☆☆", "location": "Hamilton", "id": 8 }} />}></Route>
          <Route path="/books/9" render={(props) => <Listing {...props} data={{ "name": "Geometry", "author": "Holt", "published": "2005-09-26", "price": 70, "course": "MATH 1XB3", "src": "/image/math_2.jpg", "rating": "☆", "location": "Hamilton", "id": 9 }} />}></Route>
          <Route path="/books/10" render={(props) => <Listing {...props} data={{ "name": "Elementary Calculus", "author": "H. Jerome Keisler", "published": "2015-04-30", "price": 85, "course": "MATH 2C03", "src": "/image/math_3.jpg", "rating": "☆☆☆☆", "location": "Hamilton", "id": 10 }} />}></Route>
          <Route path="/books/11" render={(props) => <Listing {...props} data={{ "name": "Essential Mathematics for Engineers", "author": "W. J. R. H Pooler", "published": "2019-11-16", "price": 120, "course": "ENG 2MA3", "src": "/image/math_4.jpg", "rating": "☆☆", "location": "Toronto", "id": 11 }} />}></Route>
        </div>
      </Router>
    )
  }
}

export default TexNavbar;
