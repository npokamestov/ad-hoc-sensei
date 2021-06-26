import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';






const ContactUs = () => {
    return (
        
          <Container>
        <br />
            <Row>
                <Col></Col>
                

                <Col>
                <Alert variant='primary'>
                    <Form >
                        <Form.Text className="text-muted" >
                            <h3>Contact Us</h3>
                            Please fill the form
                        </Form.Text>

                        <br />
                        <Form.Group controlId="formBasicFullName"  variant="primary">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail"  variant="primary">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} type="text" placeholder="Message" />
                        </Form.Group>

                        

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Alert>
                </Col>

                <br />
                <Col></Col>
            </Row>
        </Container>
        
    )
}

export default ContactUs
