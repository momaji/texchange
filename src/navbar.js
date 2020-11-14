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
          <Route exact path="/" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} />} />
          <Route path="/search/0" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Biology - Concepts and Connections"}/>} />
          <Route path="/search/1" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Biology"}/>} />
          <Route path="/search/2" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Human Biology"}/>} />
          <Route path="/search/3" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Exploring Biology in the Labratory"}/>} />
          <Route path="/search/4" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Organic Chemistry"}/>} />
          <Route path="/search/5" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Conceptual Chemistry"}/>} />
          <Route path="/search/6" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Physical Chemistry of Polymers"}/>} />
          <Route path="/search/7" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Organic Chemistry 2"}/>} />
          <Route path="/search/8" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Mathematics"}/>} />
          <Route path="/search/9" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Geometry"}/>} />
          <Route path="/search/10" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Elementary Calculus"}/>} />
          <Route path="/search/11" render={(props) => <HomePage ref={this.homePageRef} {...props} appData={data} search={"Essential Mathematics for Engineers"}/>} />
          <Route exact path="/profile/0" render={(props) => <Profile {...props} data={this.findInData("people", 0)} />} />
          <Route exact path="/profile/1" render={(props) => <Profile {...props} data={this.findInData("people", 1)} />} />
          <Route exact path="/profile/2" render={(props) => <Profile {...props} data={this.findInData("people", 2)} />} />
          <Route exact path="/profile/3" render={(props) => <Profile {...props} data={this.findInData("people", 3)} />} />
          <Route exact path="/profile/4" render={(props) => <Profile {...props} data={this.findInData("people", 4)} />} />
          <Route path="/books/0" render={(props) => <Listing {...props} data={this.findInData("textbooks", 0)} />}></Route>
          <Route path="/books/1" render={(props) => <Listing {...props} data={this.findInData("textbooks", 1)}/>}></Route>
          <Route path="/books/2" render={(props) => <Listing {...props} data={this.findInData("textbooks", 2)} />}></Route>
          <Route path="/books/3" render={(props) => <Listing {...props} data={this.findInData("textbooks", 3)} />}></Route>
          <Route path="/books/4" render={(props) => <Listing {...props} data={this.findInData("textbooks", 4)} />}></Route>
          <Route path="/books/5" render={(props) => <Listing {...props} data={this.findInData("textbooks", 5)} />}></Route>
          <Route path="/books/6" render={(props) => <Listing {...props} data={this.findInData("textbooks", 6)}/>}></Route>
          <Route path="/books/7" render={(props) => <Listing {...props} data={this.findInData("textbooks", 7)}/>}></Route>
          <Route path="/books/8" render={(props) => <Listing {...props} data={this.findInData("textbooks", 8)}/>}></Route>
          <Route path="/books/9" render={(props) => <Listing {...props} data={this.findInData("textbooks", 9)}/>}></Route>
          <Route path="/books/10" render={(props) => <Listing {...props} data={this.findInData("textbooks", 10)}/>}></Route>
          <Route path="/books/11" render={(props) => <Listing {...props} data={this.findInData("textbooks", 11)}/>}></Route>
        </div>
      </Router>
    )
  }
}

export default TexNavbar;
