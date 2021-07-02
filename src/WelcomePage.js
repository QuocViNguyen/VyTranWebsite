import React from 'react';
import { Component } from 'react';

class WelcomePage extends Component {
    constructor(props) {
        super(props)
        this.addValue = 3
        this.state = { count: 1 }
    }

    increaseCountBy5= () => {

        this.setState((prevState, props) => ({
                count: prevState.count + this.addValue
            }))
            console.log(this.state.count)
    }

    render() { 
        return (
            <div className="WelcomePage">
                <button onClick={this.increaseCountBy5}>Click Me</button>
                <p>{this.state.count}</p>
            </div>
          );
    }
}


 
export default WelcomePage;