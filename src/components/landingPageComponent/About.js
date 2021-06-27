import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'




const About = () => {
    return (
        <Container>
        <br />
        <Row>
            

            <Col>

                <Jumbotron>
                        <h1>About Us</h1>
                        <br />
                        <div>
                        <h5>ad hoc *adjective* created or done for a particular purpose as necessary.</h5>
                            <h5>sensei * noun * a teacher. </h5>
                            <br/>
                            <h3>
                          
                             Ad Hoc Sensei is (soon to be) an award-winning online platform for learning and teaching.
                             <br/>
                             Our accolades will be listed here as soon as we earn them... stay tuned!
                            </h3>
                          
                            
                        </div>
                        <br />
                        <p>
                        <Button variant="primary">List Of Courses</Button>
                    </p>
                </Jumbotron>
            </Col>


           
        </Row>


    </Container>
    )
}

export default About
