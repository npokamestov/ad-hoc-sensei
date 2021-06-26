import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';
import {useHistory} from 'react-router-dom';




const SenseiDashHeader = () => {

    const history = useHistory();

    return (
        <Container>
        
            <Navbar bg="primary" variant="dark">
            
            <LinkContainer to="/"  onClick={() => history.push('/')}>
                <Navbar.Brand >SENSEI</Navbar.Brand>
            </LinkContainer>
                <Nav className="mr-auto">
                 
                 
                    <LinkContainer to="/senseidash/profile">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/senseidash/courseform">
                        <Nav.Link >Course Form</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/senseidash/yourcourses">
                        <Nav.Link >Your Courses</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/senseidash/courseattending">
                        <Nav.Link >Courses Attending</Nav.Link>
                    </LinkContainer>
                   
                     

                </Nav>
                
            </Navbar>
        </Container>
    )
}

export default SenseiDashHeader
