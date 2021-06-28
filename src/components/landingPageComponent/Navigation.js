import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import { LinkContainer } from 'react-router-bootstrap';







const Navigation = () => {


    return (
       
        <Container>
         
            <Navbar bg="primary" variant="dark">
            
            <LinkContainer to="/">
                <Navbar.Brand >Ad Hoc Sensei</Navbar.Brand>
            </LinkContainer>
                <Nav className="mr-auto">
                 
               
                    <LinkContainer to="/home/">
                        <Nav.Link >Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/home/courses">
                        <Nav.Link >Courses</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/home/login">
                        <Nav.Link >Login</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/home/about">
                        <Nav.Link >About</Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/home/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>


                </Nav>
                
            </Navbar>

           
        </Container>
    )
}

export default Navigation
