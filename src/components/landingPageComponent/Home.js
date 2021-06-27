import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import {useHistory} from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    return (
        
        <Container>
            <br />
            <Row>
                

                <Col>

                    <Jumbotron>
                        <h1>
                            <Badge pill variant="info" >Ad Hoc Sensei</Badge>
                        </h1>

                        
                        <br />
                        <ul>
                            <h3>Find Your People.</h3>
                            <h3>Share Your Wisdom.</h3>
                            <h3>Grow Stronger.</h3>
                        </ul>
                        <br />
                        <p>
                            <Button variant="primary"
                            onClick={()=>  history.push('/home/about')}
                            >Learn more</Button>
                        </p>
                    </Jumbotron>
                </Col>


                
            </Row>


        </Container>
    )
}

export default Home
