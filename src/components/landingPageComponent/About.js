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
                        <h1>About Ad Hoc Sensei</h1>
                        <br />
                        <div>
                               <ul>
                                           <h5>Ad Hoc Sensei is freeform platform that allows Senseis of all stripes to create a Course, choose a date and Location then post the course to the Ad Hoc Sensei Course List.</h5>
                                           <br />
                                           <h5>Anyone can browse our list of courses and if something piques their interest, a quick registration process will turn them into a Student or even a potential Sensei.</h5>
                                           <br />
                                           <h5>After registering users can access their personal dashboard to see the courses they have registered or in the case of Senseis, they will see the courses they have created.</h5>
                                           <br />
                                           <h5>Whether its Yoga in the Park, a Post-Film discussion at the local diner, a course on needlepoint or a study group for the latest code technology, you can find your teacher AND your students here at Ad Hoc Sensei.</h5>

                               </ul>
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
