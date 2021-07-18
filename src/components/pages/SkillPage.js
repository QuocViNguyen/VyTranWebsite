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
            TechSkills : ['RStudio', 'SAS', 'Microsoft Office', 'Data Visualization', 'Mac OS/Windows OS'],
            SoftSkills : ['Excellent interpersonal skills', 'Strong multi-tasker', 'Skilled to work in high pressure environments', 'Strong communicator']
          }
    }

    li_styling = {
        border: 'none',
        backgroundColor: 'transparent'
    }

    ligr_styling = {
        textAlign: 'left'
    }

    render() { 
        return (
            <div className="SkillPage">
                <Container fluid>
                <Row>
                    <Col sm={{ span:5 , offset: 1}}>
                    
                        <ListGroup style={this.ligr_styling}>
                            {/* <ListGroup.Item style={this.li_styling}><CaretRightFill /> Cras justo odio</ListGroup.Item>
                            <ListGroup.Item style={this.li_styling}><CaretRightFill /> Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item style={this.li_styling}><CaretRightFill /> Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item style={this.li_styling}><CaretRightFill /> Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item style={this.li_styling}><CaretRightFill /> Vestibulum at eros</ListGroup.Item> */}
                            {this.state.TechSkills.map (SoftSkillFnc => (
                                <ListGroup.Item style={this.li_styling}><CaretRightFill/>{SoftSkillFnc}</ListGroup.Item>
                            ))}
                        </ListGroup>
                        
                    </Col>
                    <Col sm={{ span:5 , offset: 1}}>
                        AAAA
                    </Col>
                </Row>
                </Container>
            </div>
          );
    }
}
 
export default SkillPage;