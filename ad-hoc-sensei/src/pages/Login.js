import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import { LinkContainer } from 'react-router-bootstrap';
import { useState , useEffect } from 'react';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit (e){
        e.preventDefault();

        const loginData = {
            email : email,
            password : password
           
        }

        console.log(loginData)
            
     

    }



    return (
        <Container>
            <br />
            <Row>
                <Col></Col>

                <Col>
                    <Alert variant="primary">
                        <Form>



                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="example@mail.com" 
                                    value={email} onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" 
                                 value={password} onChange={e => setPassword(e.target.value)}
                                 />
                            </Form.Group>

                            <br />

                            <Form.Group id="formGridCheckbox">
                                <Nav.Item>
                                     <LinkContainer to="/home/register">
                                    <Nav.Link>Register Instead</Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                                
                            </Form.Group>

                               

                            <Button variant="primary" type="submit" onClick={handleSubmit} >
                                Submit
                            </Button>
                        </Form>
                    </Alert>
                </Col>


                <Col></Col>
            </Row>


        </Container>
    )
}

export default Login
