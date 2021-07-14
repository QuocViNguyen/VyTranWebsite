import React from 'react';
import { Component } from 'react';
import './AboutPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProfilePic} from '../AboutPageProfilePic.style'
import {AboutIntro} from '../AboutPageIntro.style'
import styled from "styled-components";
import * as Util from '../Ultility.style'

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="AboutPage">
                <Container fluid>
                <Col className="Title">ABOUT ME</Col>
                <Row>
                    <Col sm={{ span:2 , offset: 1}}>
                        <ProfilePic/>
                    </Col>
                    <Col sm={{ span:8 , offset: 1}}>
                        <Util.Spacer height="5rem"/>
                        <AboutIntro/>
                    </Col>
                </Row>
                </Container>
            </div>
         );
    }
}
 
export default AboutPage;