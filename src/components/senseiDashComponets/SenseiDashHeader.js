import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';
import { useState  } from 'react';
import { useEffect  } from 'react';
import axios from 'axios';
import SenseiProfile from './SenseiProfile';
import {useHistory} from 'react-router-dom';




export const SenseiDashHeader = () => {

    const [senseidashId, setSenseidashId] = useState(1);
    const [showSenseiName, setShowSenseiName] = useState('')

    useEffect(() => {
        
        axios.get(`http://localhost:8142/user/${senseidashId}`)
            .then(res => {
             // console.log(res.data.firstName)
              setShowSenseiName(res.data.firstName)
             // renderName();
            })
                  

        },[])

        const renderName = () => {}

    return (
        <Container>
        
            <Navbar bg="primary" variant="dark">
            
            <LinkContainer to="/" >
                <Navbar.Brand >Sensei 
                                {showSenseiName}
                </Navbar.Brand>
            </LinkContainer>
                <Nav className="mr-auto">
                 
                 
                    <LinkContainer to="/senseidash/profile">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/senseidash/courseform">
                        <Nav.Link >Course Form</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/senseidash/senseiclasstable">
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
