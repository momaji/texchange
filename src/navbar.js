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



  findInData(name, id){
    var source = data[name];
    var result;
    source.forEach(element => (element['id'] === id ? result = element : null));
    return result;
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
          <Route exact path="/" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={this.props.appData} />} />
          <Route path="/search/:id" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={this.props.appData} search={true}/>} />
          <Route path="/profile/:id" render={(props) => <Profile {...props} data={this.props.appData} />} />
          <Route path="/books/:id" render={(props) => <Listing {...props} data={this.props.appData} />}></Route>
        </div>
      </Router>
    )
  }
}

export default TexNavbar;
