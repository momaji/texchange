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

    this.state={
      appData: data,
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
