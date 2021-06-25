import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


const home = () => {
    return (
        
        <Container>
            <br />
            <Row>
                <Col></Col>

                <Col>

                    <Jumbotron>
                        <h1>Hello, to the Sensei world</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                </Col>


                <Col></Col>
            </Row>


        </Container>
    )
}

export default home
