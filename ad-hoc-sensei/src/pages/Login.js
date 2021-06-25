import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import FormControl from 'react-bootstrap/FormControl'



const Login = () => {
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
                                <Form.Control type="email" placeholder="example@mail.com" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" />
                            </Form.Group>

                            <br />

                            <Form.Group id="formGridCheckbox">
                                <Nav.Item>
                                    <Nav.Link href="/register">Register Instead</Nav.Link>
                                </Nav.Item>
                            </Form.Group>

                               

                            <Button variant="primary" type="submit">
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
