import './App.css';
import './homepage.js';
import './bootstrap_minty/bootstrap.min.css';
import TexNavbar from './navbar.js';
import SellModal from './sellbook.js';
import data from './data.js'
// import React from "react";
import React, { createRef, Component } from "react";
import ReactDOM from 'react-dom';
//TexNavBar cannot be in a div otherwise sticky position will not work!!!
class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      appData: {
        "locations": [ "Toronto", "Brampton", "Hamilton"],
        "classes": [ "ENG 2MA3", "CHEM 4P03", "BIO 1B03" ],
        "textbooks": [  { "name": "Biology - Concepts and Connections", "author": "Campbell", "published": "1990-01-01", "price": 40, "course": "BIO 1A03", "src": "/image/bio_1.jpg", "rating": "☆☆☆☆" , "location": "Hamilton"},
                        { "name": "Biology", "author": "Brooker", "published": "2002-03-21", "price": 60, "course": "BIO 1B03", "src": "/image/bio_2.jpg", "rating": "☆☆☆", "location": "Brampton" },
                        { "name": "Human Biology", "author": "Michael D. Johnson", "published": "2008-03-21", "price": 90, "course": "BIO 3HB3", "src": "/image/bio_3.jpg", "rating": "☆☆", "location": "Toronto" },
                        { "name": "Exploring Biology in the Labratory", "author": "John L. Crawley", "published": "2018-06-14", "price": 110, "course": "BIO 2LA3", "src": "/image/bio_4.jpg", "rating": "☆☆☆☆☆", "location": "Brampton" },
                        { "name": "Organic Chemistry", "author": "Michael B. Smith", "published": "2000-11-04", "price": 40, "course": "CHEM 2OC3", "src": "/image/chemistry_1.jpg", "rating": "☆", "location": "Hamilton" },
                        { "name": "Conceptual Chemistry", "author": "John Suchocki", "published": "2008-03-21", "price": 60, "course": "CHEM 3CC3", "src": "/image/chemistry_2.jpg", "rating": "☆☆☆", "location": "Hamilton" },
                        { "name": "Physical Chemistry of Polymers", "author": "Sebastian Seiffert", "published": "2013-02-19", "price": 95, "course": "CHEM 4P03", "src": "/image/chemistry_3.jpg", "rating": "☆☆☆☆", "location": "Brampton" },
                        { "name": "Organic Chemistry 2", "author": "Francis A. Carey", "published": "2017-08-20", "price": 115, "course": "CHEM 2CO3", "src": "/image/chemistry_4.jpg", "rating": "☆☆☆☆☆", "location": "Toronto" },
                        { "name": "Mathematics", "author": "Holt", "published": "2002-12-05", "price": 45, "course": "MATH 1XA3", "src": "/image/math_1.jpg", "rating": "☆☆☆", "location": "Hamilton" },
                        { "name": "Geometry", "author": "Holt", "published": "2005-09-26", "price": 70, "course": "MATH 1XB3", "src": "/image/math_2.jpg", "rating": "☆", "location": "Hamilton" },
                        { "name": "Elementary Calculus", "author": "H. Jerome Keisler", "published": "2015-04-30", "price": 85, "course": "MATH 2C03", "src": "/image/math_3.jpg", "rating": "☆☆☆☆", "location": "Hamilton" },
                        { "name": "Essential Mathematics for Engineers", "author": "W. J. R. H Pooler", "published": "2019-11-16", "price": 120, "course": "ENG 2MA3", "src": "/image/math_4.jpg", "rating": "☆☆", "location": "Toronto" }
                    ]
      },
      sellModalVisible: false
  };

    this.handler = this.handler.bind(this)
    this.showSellModal = this.showSellModal.bind(this)
    this.closeSellModal= this.closeSellModal.bind(this)
  }

  componentDidMount() {
     const node = this.wrapper.current;
     /* Uses DOM node  */
 }

 wrapper = createRef();

  closeSellModal(){
    this.setState({
      sellModalVisible: false
    });
  }

  showSellModal(){
    this.setState({
      sellModalVisible: true
    })
  }

  handler(info) {
    let newData = this.state.appData;
    newData.textbooks.push(info)
    this.setState({
      appData: newData
    })
  }

  render(){
    return (
      <div className="App">
        <TexNavbar appData={this.state.appData} openModal={this.showSellModal} createListing={this.handler}/>
        <SellModal show={this.state.sellModalVisible}
        onHide={this.closeSellModal}/>
      </div>
    );
  }
}

export default App;
