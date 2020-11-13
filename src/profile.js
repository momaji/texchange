//The JS code for the Profile React Component
import React from 'react';
import { Container, Row, Col, Dropdown, Form, Image } from 'react-bootstrap';


class YourProfile extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            profileID: this.props.id,
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            location: ""
        };
    }

    componentDidMount()
    {
        this.setState
        ({            
            firstName: this.props.appData.firstNames[this.state.profileID],
            lastName: this.props.appData.lastNames[this.state.profileID],
            email: this.props.appData.emails[this.state.profileID],
            number: this.props.appData.numbers[this.state.profileID],
            location: this.props.appData.profileLocations[this.state.profileID] 
        });
    }   

    render()
    {
        return (
            <div>{this.state.firstName}</div>
        );
    }
}

export default YourProfile;