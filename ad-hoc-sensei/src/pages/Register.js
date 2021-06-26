import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useState , useEffect } from 'react';
import axios from 'axios';









const Register = () => {


       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [firstName, setFirstName] = useState('');
       const [lastName, setLastName] = useState('');
       const [bio, setBio] = useState('');
       const [instructor, setInstructor] = useState(false);

       

        function handleSubmit (e){
            e.preventDefault();
            
            const registrationData = {
                email : email,
                password : password,
                firstName : firstName,
                lastName : lastName,
                bio : bio,
                instructor : instructor

            }

            axios.post("http://localhost:8142/register", registrationData)
            .then(res => {
                setEmail("");
                setPassword("");
                setFirstName("");
                setLastName("");
                setBio("");
                setInstructor(false);
                console.log(res.data)
                //refreshPage();


            })
            .catch(
                err => {
                    console.log(err)
                }
            )                 

        }

        function refreshPage(){
            window.location.reload(false)
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
                                    <Form.Control type="email" placeholder="Enter email"
                                    value={email} onChange={e => setEmail(e.target.value)} 

                                    />
                                </Form.Group>
                            


                            
                                <Form.Group  controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" 
                                        value={password} onChange={e => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            


                            <Form.Group controlId="firstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" 
                                    value={firstName} onChange={e => setFirstName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" 
                                    value={lastName} onChange={e => setLastName(e.target.value)}
                                />
                            </Form.Group>


                            
                                <Form.Group controlId="formbio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control as="textarea" rows={4} type="text" placeholder="Bio" 
                                        value={bio} onChange={e => setBio(e.target.value)}
                                    />
                                </Form.Group>
                            
                            

                            <Form.Group id="formGridCheckbox">
                            
                                <Form.Check  type="checkbox" label="Would You also Like to instruct Courses?" 
                                    value={instructor} onChange={e => setInstructor(!instructor)}
                                />

                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Register
                            </Button>
                        </Form>
                    </Alert>
                </Col>
               

                <Col></Col>
            </Row>


        </Container>
    )
}

export default Register
