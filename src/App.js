import './App.css';
import './homepage.js';
import './bootstrap_minty/bootstrap.min.css';
import TexNavbar from './navbar.js';
import SellModal from './sellbook.js';
import data from './data.js'
import React, { createRef, Component } from "react";
import ReactDOM from 'react-dom';

//TexNavBar cannot be in a div otherwise sticky position will not work!!!
class App extends React.Component{
  constructor(props){
    super(props);

    // sample textbook appData
    // { "name": "Organic Chemistry 2", "author": "Francis A. Carey", "published": "2017-08-20", "price": 115, "course": "CHEM 2CO3", "src": "/image/chemistry_4.jpg", "rating": "☆☆☆", "location": "Toronto", "id": 7, "personId": 2 },

    this.state={
      appData: data,
      sellModalVisible: false,
      sellTextBookName: '',
      sellTextBookAuthor: '',
      sellTextBookPrice: '',
      sellTextBookFlexible: false,
      sellTextBookDatePublished: '',
      sellTextBookDescription: '',
      sellTextBookCourses: '',
      sellTextBookFile: ''
  };

    this.createListing = this.createListing.bind(this)
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

  nameStateChange(event) {
    this.setState({sellTextBookName: event.target.value});
  }

  authorStateChange(event) {
    this.setState({sellTextBookAuthor: event.target.value});
  }

  priceStateChange(event) {
    this.setState({sellTextBookPrice: event.target.value});
  }

  flexibleStateChange(event) {
    this.setState({sellTextBookFlexible: event.target.checked});
  }

  datePublishedStateChange(event) {
    this.setState({sellTextBookDatePublished: event.target.value});
  }

  descriptionStateChange(event) {
    this.setState({sellTextBookDescription: event.target.value});
  }

  coursesStateChange(event) {
    this.setState({sellTextBookCourses: event.target.value});
  }

  fileStateChange(event) {
    this.setState({sellTextBookFile: URL.createObjectURL(event.target.files[0])});
  }

  createListing() {
    // console.log('name: '+this.state.sellTextBookName)
    // console.log('author: '+this.state.sellTextBookAuthor)
    // console.log('price: '+this.state.sellTextBookPrice)
    // console.log('flexible: '+this.state.sellTextBookFlexible)
    // console.log('date published: '+this.state.sellTextBookDatePublished)
    // console.log('description: '+this.state.sellTextBookDescription)
    // console.log('course: ' + this.state.sellTextBookCourses)
    // console.log('file: ' +this.state.sellTextBookFile)
    let info = { "name": this.state.sellTextBookName, "author": this.state.sellTextBookAuthor, "published": this.state.sellTextBookDatePublished, "price": this.state.sellTextBookPrice, "course": this.state.sellTextBookCourses, "src": this.state.sellTextBookFile, "rating": "☆☆☆", "location": "Toronto", "id": this.state.appData.textbooks.length, "personId": 0 }
    let newData = this.state.appData;
    newData.textbooks.push(info)
    this.setState({
      appData: newData,
      sellTextBookName: '',
      sellTextBookAuthor: '',
      sellTextBookPrice: '',
      sellTextBookFlexible: false,
      sellTextBookDatePublished: '',
      sellTextBookDescription: '',
      sellTextBookCourses: '',
      sellTextBookFile: ''
    })
    this.closeSellModal()
  }

  render(){
    return (
      <div className="App">
        <TexNavbar appData={this.state.appData} openModal={this.showSellModal} />
        <SellModal show={this.state.sellModalVisible} onHide={this.closeSellModal}
        createListing={this.createListing}
        name={this.state.sellTextBookName}
        author={this.state.sellTextBookAuthor}
        price={this.state.sellTextBookPrice}
        flexible={this.state.sellTextBookFlexible}
        datePublished={this.state.sellTextBookDatePublished}
        description={this.state.sellTextBookDescription}
        courses={this.state.sellTextBookCourses}
        file={this.state.sellTextBookFile}
        nameInputHandler={this.nameStateChange.bind(this)}
        authorInputHandler={this.authorStateChange.bind(this)}
        priceInputHandler={this.priceStateChange.bind(this)}
        flexibleInputHandler={this.flexibleStateChange.bind(this)}
        datePublishedInputHandler={this.datePublishedStateChange.bind(this)}
        descriptionInputHandler={this.descriptionStateChange.bind(this)}
        coursesInputHandler={this.coursesStateChange.bind(this)}
        fileInputHandler={this.fileStateChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
