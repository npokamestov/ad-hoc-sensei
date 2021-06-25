import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'





const Navigation = () => {


    return (
        
        <Container>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">SENSEI</Navbar.Brand>
                <Nav className="mr-auto">

                    <Nav.Link href="#home">Home</Nav.Link>
                  
                    <Nav.Link href="#courses">Courses</Nav.Link>

                    <Nav.Link href="#login">Login</Nav.Link>

                    <Nav.Link href="#about">About</Nav.Link>

                    <Nav.Link href="#contact">Contact</Nav.Link>

                </Nav>
                
            </Navbar>
        </Container>
    )
}

export default Navigation
