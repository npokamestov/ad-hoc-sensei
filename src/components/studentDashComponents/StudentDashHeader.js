import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import { LinkContainer } from 'react-router-bootstrap';



const StudentDashHeader = () => {

    
    return (
        <Container>
        <Row>


        <Navbar expand="sm" bg="primary" variant="dark">
                
                <LinkContainer to="/" >
                  <Navbar.Brand >
                     {/* <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" 
                       
                     />{' '} */}
                     Student Dashboard
                   </Navbar.Brand>
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
          </Row>
        </Container>
    )
}

export default StudentDashHeader
