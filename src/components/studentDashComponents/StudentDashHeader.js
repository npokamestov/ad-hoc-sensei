import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom';



export const StudentDashHeader = () => {


    const [studentDashId, setStudentDashId] = useState(4);
    const [showStudenName, setShowStudenName] = useState('')
    
    useEffect(() => {

        axios.get(`http://localhost:8142/user/${studentDashId}`)
            .then(res => {
                console.log(res.data.firstName)
                setShowStudenName(res.data.firstName)
                renderName();

            })


    }, [])

    const renderName = () => {
        //console.log(showStudenName)


        return (

            <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>

            </div>
        )
    }


    return (
        
        <Container>
        

        <div className="studenNavBar"  showStudenName={showStudenName}></div>
            <Row>         

                <Navbar expand="sm" bg="primary" variant="dark">

                    <LinkContainer to="/" >
                        <Navbar.Brand >
                            {/* <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" 
                       
                     />{' '} */}
                            Student 
                            {showStudenName}
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
