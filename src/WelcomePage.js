import React from 'react';
import { Component } from 'react';
import './WelcomePage.css';

class WelcomePage extends Component {
    constructor(props) {
        super(props)
        this.addValue = 3
        this.state = { count: 1 }
        this.name = 'VY TRAN'
    }

    increaseCountBy5(){
        this.setState((prevState, props) => ({
        count: prevState.count + this.addValue
        }))
        // console.log(this.state.count)
    }

    nameTitle = () => {
        return <div className="nameTitle">{this.name}</div>
    }
    

    render() { 
        return (
            <div className="WelcomePage">
                <button onClick={() => this.increaseCountBy5()}>Click Me</button>
                <p>{this.state.count}</p>
                {this.nameTitle()}
            </div>
          );
    }
}
 
export default WelcomePage;