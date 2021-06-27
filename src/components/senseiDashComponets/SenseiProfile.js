import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useState  } from 'react';
import { useEffect  } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
 


const SenseiProfile = () => {

       const history = useHistory();
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [firstName, setFirstName] = useState('');
       const [lastName, setLastName] = useState('');
       const [bio, setBio] = useState('');
       //const [instructor, setInstructor] = useState(false);
                                              
       const [senseidashId, setSenseidashId] = useState(21);

       
      
        // function handleSubmit (e){
        //     e.preventDefault();
            
        //     const registrationData = {
        //         email : email,
        //         password : password,
        //         firstName : firstName,
        //         lastName : lastName,
        //         bio : bio,
        //         instructor : instructor

        //     }

        //     axios.post("http://localhost:8142/register", registrationData)
        //     .then(res => {
        //         setEmail("");
        //         setPassword("");
        //         setFirstName("");
        //         setLastName("");
        //         setBio("");
        //         setInstructor(false);
        //         history.push('/home/login')
        //         refreshPage()
                


        //     })
        //     .catch(
        //         err => {
        //             console.log(err)
        //         }
        //     )                 

        // }

        // function refreshPage(){
           
        //     window.location.reload()
        // }




        useEffect(() => {
        
            axios.get(`http://localhost:8142/user/${senseidashId}`)
                .then(res => {
                    
                   setEmail(res.data.email)
                   setPassword(res.data.password)
                   setFirstName(res.data.firstName)
                   setLastName(res.data.lastName)
                   setBio(res.data.bio)
                   
                    
                })
                      
    
            },[])

            function handleSubmit (e){
                e.preventDefault();

                const profileData = {
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    bio:bio,

                }

                axios.put(`http://localhost:8142/user/${senseidashId}`, profileData)
                .then(res => {
                    console.log(res)
                    refreshPage()

                })
                .catch(err => {
                    console.log(err)
                })

            
            }




            function refreshPage(){
           
             window.location.reload()
            }

    return (
        <Container>
            <br />
            <Row>
               
            

                <Col>
                
                    <Alert variant="primary">
                        <Form>
                            <Row>      
                               <Form.Group  as={Col} controlId="firstname">
                                     <Form.Label>First Name</Form.Label>
                                      <Form.Control type="text" placeholder="First Name" 
                                       value={firstName} onChange={e => setFirstName(e.target.value)}
                                        />
                               </Form.Group>


                               <Form.Group  as={Col} controlId="lastname">
                                     <Form.Label>Last Name</Form.Label>
                                      <Form.Control type="text" placeholder="Last Name" 
                                     value={lastName} onChange={e => setLastName(e.target.value)}
                                     />
                                  </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                    value={email} onChange={e => setEmail(e.target.value)} 

                                    />
                                </Form.Group>
                            
                            
                                <Form.Group  as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="password" 
                                        value={password} onChange={e => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            
                            </Row>

                            
                                <Form.Group controlId="formbio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control as="textarea" rows={4} type="text" placeholder="Bio" 
                                        value={bio} onChange={e => setBio(e.target.value)}
                                    />
                                </Form.Group>
                                                  

                            
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                        </Form>
                    </Alert>
                </Col>
               

                
            </Row>


        </Container>
    )
}

export default SenseiProfile
