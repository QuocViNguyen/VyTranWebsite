import React from 'react';
import { Component } from 'react';
import './WelcomePage.css';
import { NameTitle,  JobTitle } from '../WelcomePageTitles.style';
import { WelcomeImage } from '../WelcomePageIcons.style';

class WelcomePage extends Component {
    constructor(props) {
        super(props)
        this.addValue = 3
        this.state = { count: 1 }
        this.name = 'VY TRAN'
        this.job = ['DATA', <br/> ,'ANALYST'] 
    }

    increaseCountBy5(){
        this.setState((prevState, props) => ({
        count: prevState.count + this.addValue
        }))
    }

    render() { 
        return (
            <div className="WelcomePage">
                <div className="InnerDiv">
                    <NameTitle>VY TRAN</NameTitle>
                    <JobTitle><text>{ ['DATA', <br/> ,'ANALYST'] }</text></JobTitle>
                    <WelcomeImage></WelcomeImage>
                </div>
            </div>
          );
    }
}
 
export default WelcomePage;