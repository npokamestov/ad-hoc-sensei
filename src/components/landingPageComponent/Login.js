import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';
import axios from "axios";
import { useState , useEffect } from 'react';
import {useHistory} from 'react-router-dom';



const Login = () => {

    //const history = useHistory();
    //const [callBack, setCallBack] = useState([]) 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit (e){
       e.preventDefault();

        //base on call back we need change this
       //history.push('/studentdash/')
      // history.push('/senseidash/')
      // refreshPage()
        
         
        const loginData = {
            email : email,
            password : password
           
        }
        console.log(loginData)
        console.log(typeof loginData )
        //axios.get("http://localhost:8145/login", loginData)
        axios.get("http://localhost:8145/login", loginData)
         .then(res => {

                        console.log(res.data)
                //setEmail("");
                //setPassword("");
               /// setCallBack(res.data)
                
            })
                     
            .catch(
                err => {
                    console.log(err)
                });
            
    }
    function refreshPage() {
        window.location.reload();
      }
    // useEffect(() =>{
        
    //     console.log("theinside the useEffenct :"+ callBack);
    // }, [callBack])


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

                            <Button variant="primary" type="submit"  
                            onClick={handleSubmit}
                            >
                                Submit
                            </Button>

                            <Form.Group id="formGridCheckbox">
                                <Nav.Item>
                                     <LinkContainer to="/home/register">
                                    <Nav.Link>or Click Here to Register as a NEW Student</Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                                
                            </Form.Group>

                        </Form>
                    </Alert>
                </Col>


                <Col></Col>
            </Row>


        </Container>
    )
}

export default Login
