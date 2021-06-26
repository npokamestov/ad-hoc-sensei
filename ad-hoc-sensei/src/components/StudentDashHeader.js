import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';
import {useHistory} from 'react-router-dom';


const StudentDashHeader = () => {

    const history = useHistory();

    return (
        <Container>
        
            <Navbar bg="primary" variant="dark">
            
            <LinkContainer to="/" onClick={() => history.push('/')}>
                <Navbar.Brand >SENSEI</Navbar.Brand>
            </LinkContainer>
                <Nav className="mr-auto">
                 
                 
                    <LinkContainer to="/studentdash/profile">
                        <Nav.Link >Profile</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/studentdash/courses">
                        <Nav.Link >Courses</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/studentdash/coursesAttending">
                        <Nav.Link >Courses Attending</Nav.Link>
                    </LinkContainer>

                    
                </Nav>
                
            </Navbar>
        </Container>
    )
}

export default StudentDashHeader
