
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./components/y.jsx"


class Main extends Component {

    constructor(props){
        super(props)
    }

    
    render(){
        return (
            <div>
                <App />
            </div>
        )
    }
}

ReactDOM.render(<Main></Main>,document.getElementById("app"))