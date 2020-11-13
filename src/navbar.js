import React from 'react';
import logo from './texchange_logo.png';
import data from './data.js'
import HomePage from './homepage.js';
import YourProfile from './YourProfile.js';
import { IoIosAddCircle } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { Navbar, Nav, Form, Button, FormControl, Image } from 'react-bootstrap';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class TexNavbar extends React.Component{
  constructor(props){
    super(props);
    this.homePageRef = React.createRef();

    this.state={ searchKey: "" };

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
    this.homePageRef.current.searchBooks(this.state.searchKey);
  }



  render(){
    return(
      <Router>
        <div>
          <Navbar collapseOnSelect sticky="top" bg="primary" variant="dark">
            <Navbar.Brand as={NavLink} exact to="/">
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
              <Button className="tn btn-secondary my-2 my-sm-0" onClick={this.handleSearchClick.bind(this)}>Search</Button>
            </Form>
            <Button onClick={this.props.openModal}className="ml-auto">Sell a texbook <IoIosAddCircle/></Button>
            <Nav className="mr-sm-0">
              <Nav.Link as={NavLink} to="/profile"><Button>Hello, Paul <BsFillPersonFill/></Button></Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Route exact path="/" render={(props) => <HomePage {...props} appData={data} />} />
          <Route path="/profile" component={YourProfile}/>
        </div>
      </Router>
    )
  }
}

export default TexNavbar;
