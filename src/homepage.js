//The JS code for the Homepage React Component
import React from 'react';

class HomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            books: []
        };
    }

    render(){
        return(
            <div className="container-fluid bg-primary pt-3">
                <div className="row">
                    <div className="col-sm-2">
                        <h4>Filter By:</h4>
                    </div>
                    <div className="col-sm-5">
                        <h4>X Number of Results...</h4>
                    </div>
                    <div className="col-sm-5">
                        <div className="form-group">
                            <select className="form-control" id="sel1">
                                <option>Sort By Price Lowest to Highest</option>
                                <option>Sort By Price Highest to Lowest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row bg-white">
                    <div className="col-sm-2">
                        <div className="row font-weight-bold">
                            <br />
                            Average Seller Review
                        </div>
                        <div className="row">
                            ☆☆☆☆ and up

                        </div>
                        <div className="row">
                            ☆☆☆ and up
                        </div>
                        <div className="row">
                            ☆☆ and up
                        </div>
                        <div className="row">
                            ☆ and up
                        </div>
                    </div>
                    <div className="col-sm-10 bg-error">
                        b
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;