import './App.css';
import './homepage.js';
import './bootstrap_minty/bootstrap.min.css';
import TexNavbar from './navbar.js';
import SellModal from './sellbook.js';
import EditModal from './editbook.js';
import data from './data.js'
import React from "react";

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
      sellTextBookFile: '',
      editModalVisible: false,
      editModalTextBookName: '',
      editModalTextBookAuthor: '',
      editModalTextBookPrice: '',
      editModalTextBookFlexible: false,
      editModalTextBookDatePublished: '',
      editModalTextBookDescription: '',
      editModalTextBookCourses: '',
      editModalTextBookFile: ''
  };

    this.createListing = this.createListing.bind(this)
    this.showSellModal = this.showSellModal.bind(this)
    this.closeSellModal = this.closeSellModal.bind(this)
    this.editListing = this.editListing.bind(this)
    this.showEditModal = this.showEditModal.bind(this)
    this.closeEditModal = this.closeEditModal.bind(this)
  }

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

  closeEditModal(){
    this.setState({
      editModalVisible: false
    });
  }

  showEditModal(id){
    //gotta populate the state data as well!!!!
    console.log('edit modal id: '+id)
    this.setState({
      editModalVisible: true
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

  editModalNameStateChange(event) {
    this.setState({editModalTextBookName: event.target.value});
  }

  editModalAuthorStateChange(event) {
    this.setState({editModalTextBookAuthor: event.target.value});
  }

  editModalPriceStateChange(event) {
    this.setState({editModalTextBookPrice: event.target.value});
  }

  editModalFlexibleStateChange(event) {
    this.setState({editModalTextBookFlexible: event.target.checked});
  }

  editModalDatePublishedStateChange(event) {
    this.setState({editModalTextBookDatePublished: event.target.value});
  }

  editModalDescriptionStateChange(event) {
    this.setState({editModalTextBookDescription: event.target.value});
  }

  editModalCoursesStateChange(event) {
    this.setState({editModalTextBookCourses: event.target.value});
  }

  editModalFileStateChange(event) {
    this.setState({editModalTextBookFile: URL.createObjectURL(event.target.files[0])});
  }

  createListing() {
    let info = { "name": this.state.sellTextBookName, "author": this.state.sellTextBookAuthor, "published": this.state.sellTextBookDatePublished, "price": this.state.sellTextBookPrice, "course": this.state.sellTextBookCourses, "src": this.state.sellTextBookFile, "rating": "☆☆☆", "location": "Hamilton, ON", "id": this.state.appData.textbooks.length, "personId": 0 }
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

  editListing() {
    let info = { "name": this.state.editModalTextBookName, "author": this.state.editModalTextBookAuthor, "published": this.state.editModalTextBookDatePublished, "price": this.state.editModalTextBookPrice, "course": this.state.editModalTextBookCourses, "src": this.state.editModalTextBookFile, "rating": "☆☆☆", "location": "Toronto", "id": this.state.appData.textbooks.length, "personId": 2 }
    let newData = this.state.appData;
    newData.textbooks.push(info)
    this.setState({
      appData: newData,
      editModalTextBookName: '',
      editModalTextBookAuthor: '',
      editModalTextBookPrice: '',
      editModalTextBookFlexible: false,
      editModalTextBookDatePublished: '',
      editModalTextBookDescription: '',
      editModalTextBookCourses: '',
      editModalTextBookFile: ''
    })
    this.closeeditModalModal()
  }

  render(){
    return (
      <div className="App">
        <TexNavbar appData={this.state.appData} openModal={this.showSellModal} openEditModal={this.showEditModal}/>
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
        <EditModal show={this.state.editModalVisible} onHide={this.closeEditModal}
        editListing={this.editListing}
        name={this.state.editModalTextBookName}
        author={this.state.editModalTextBookAuthor}
        price={this.state.editModalTextBookPrice}
        flexible={this.state.editModalTextBookFlexible}
        datePublished={this.state.editModalTextBookDatePublished}
        description={this.state.editModalTextBookDescription}
        courses={this.state.editModalTextBookCourses}
        file={this.state.editModalTextBookFile}
        nameInputHandler={this.editModalNameStateChange.bind(this)}
        authorInputHandler={this.editModalAuthorStateChange.bind(this)}
        priceInputHandler={this.editModalPriceStateChange.bind(this)}
        flexibleInputHandler={this.editModalFlexibleStateChange.bind(this)}
        datePublishedInputHandler={this.editModalDatePublishedStateChange.bind(this)}
        descriptionInputHandler={this.editModalDescriptionStateChange.bind(this)}
        coursesInputHandler={this.editModalCoursesStateChange.bind(this)}
        fileInputHandler={this.editModalFileStateChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
