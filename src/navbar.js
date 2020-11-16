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

    this.state={ searchKey: "", nullRefAlert: false, appData2: this.props.appData };
    this.handleProfileClick = this.handleProfileClick.bind(this);
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
        <Alert variant="danger">Looking for a book? Click Search again to begin!<button type="button" onClick={this.handleProfileClick} className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></Alert>
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
              <Nav.Link as={NavLink} to="/profile/0"><Button onClick={this.handleProfileClick.bind(this)}>Hello, Kevin <BsFillPersonFill/></Button></Nav.Link>
            </Nav>
          </Navbar>
          {this.renderAlert()}
          
          <Route exact path="/" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={this.props.appData} />} />
          <Route path="/search/:id" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={this.props.appData} search={true}/>} />
          <Route path="/profile/:id" render={(props) => <Profile {...props} appData={this.props.appData} openEditModal={this.props.openEditModal}
            editProfile={this.props.editProfile.bind(this)}
            firstName={this.props.firstName}
            lastName={this.props.lastName}
            gender={this.props.gender}
            email={this.props.email}
            phone={this.props.phone}
            location={this.props.location}
            editFirstName={this.props.editFirstName.bind(this)}
            editLastName={this.props.editLastName.bind(this)}
            editGender={this.props.editGender.bind(this)}
            editEmail={this.props.editEmail.bind(this)}
            editPhone={this.props.editPhone.bind(this)}
            editLocation={this.props.editLocation.bind(this)}
            editPic={this.props.editPic.bind(this)}
          />} />
          <Route path="/books/:id" render={(props) => <Listing {...props} appData={this.props.appData}  
            editProfile={this.props.editProfile.bind(this)}
            addFavourite={this.props.addFavourite.bind(this)}
            removeFavourite={this.props.removeFavourite.bind(this)}
          />} />
        </div>
      </Router>
    )
  }
}

export default TexNavbar;
