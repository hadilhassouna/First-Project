
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/navBar.jsx";

import App from "./components/y.jsx";

import Other from "./components/h.jsx";


class Main extends Component {

    constructor(props){
        super(props)
    }

    
    render(){
        return (
            <div>
     
                <App />
                <Other />
            </div>
        )
    }
};

ReactDOM.render(<Main></Main>,document.getElementById("app"));