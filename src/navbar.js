import React from 'react';
import logo from './texchange_logo.png';
import { IoIosAddCircle } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { Navbar, Nav, Form, Button, FormControl, Image } from 'react-bootstrap';


class TexNavbar extends React.Component{
  constructor(props){
    super(props);

    this.state={};
  }

  render(){
    return(
        <Navbar collapseOnSelect sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
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
          <FormControl type="text" placeholder="Search for Textbooks" className="mr-sm-2" />
          <Button className="tn btn-secondary my-2 my-sm-0">Search</Button>
        </Form>
        <Button className="ml-auto">Sell a texbook <IoIosAddCircle/></Button>
        <Nav className="mr-sm-0">
          <Nav.Link href="#profile">Hello, Paul <BsFillPersonFill/></Nav.Link>
        </Nav>

      </Navbar>
    )
  }
}

export default TexNavbar;
