import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


// for more study https://www.pluralsight.com/guides/how-to-use-one-component-to-render-many-html-fragments-in-reactjs
const RenderingMainHeader = () => {


    const [studentDashId, setStudentDashId] = useState(4);
    const [showStudenName, setShowStudenName] = useState('')

    useEffect(() => {

        axios.get(`http://localhost:8142/user/${studentDashId}`)
            .then(res => {

                setShowStudenName(res.data.firstName)
               

            })

    }, [])

    return (
        <React.Fragment>
            <div className="studenNavBar" showStudenName={showStudenName}></div>
            <Row>

                <Navbar expand="sm" bg="primary" variant="dark">


                    <Navbar.Brand >
                        {/* <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" 
                   
                 />{' '} */}
                        Student
                        {showStudenName}
                    </Navbar.Brand>

                    <Nav className="mr-auto">


                        <LinkContainer to="/studentdash/profile">
                            <Nav.Link >Profile</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/studentdash/courses" className=" mr-sm-2">
                            <Nav.Link >Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/studentdash/coursesAttending">
                            <Nav.Link >Courses Attending</Nav.Link>
                        </LinkContainer>


                        <Nav >
                            <LinkContainer to="/">

                                <Nav.Link >Logout</Nav.Link>

                            </LinkContainer>
                        </Nav>

                    </Nav>

                </Navbar>
            </Row>

        </React.Fragment>
    )

}





const StudentDashHeader = () => {


    return (
        
            <Container>
                
                <RenderingMainHeader></RenderingMainHeader>

            </Container>
       
    );
}

export default StudentDashHeader
