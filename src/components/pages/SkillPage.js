import React from 'react';
import { Component } from 'react';
import './SkillPage.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CaretRightFill } from 'react-bootstrap-icons';

class SkillPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TechSkills : ['RStudio/SAS', 'Microsoft Office', 'Data Visualization', 'Mac OS/Windows OS'],
            SoftSkills : ['Excellent interpersonal skills', 'Strong multi-tasker', 'Skilled to work in high pressure environments', 'Strong communicator']
          }
    }

    li_styling = {
        border: 'none',
        backgroundColor: 'transparent',
    }

    ligr_styling = {
        textAlign: 'left'
    }

    bullet_styling = {
        marginRight: '10px'
    }

    render() { 
        return (
            <div className="SkillPage">
                <Container fluid>
                <Row>
                    <Col sm={{ span:5 , offset: 1}}>
                    
                        <ListGroup style={this.ligr_styling}>
                            {this.state.TechSkills.map (TechSkillFnc => (
                                <ListGroup.Item style={this.li_styling}><CaretRightFill style={this.bullet_styling}/>{TechSkillFnc}</ListGroup.Item>
                            ))}
                        </ListGroup>
                        
                    </Col>
                    <Col sm={{ span:5 , offset: 1}}>
                        <ListGroup style={this.ligr_styling}>
                                {this.state.SoftSkills.map (SoftSkillFnc => (
                                    <ListGroup.Item style={this.li_styling}><CaretRightFill style={this.bullet_styling}/>{SoftSkillFnc}</ListGroup.Item>
                                ))}
                        </ListGroup>
                    </Col>
                </Row>
                </Container>
            </div>
          );
    }
}
 
export default SkillPage;