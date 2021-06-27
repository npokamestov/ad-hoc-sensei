import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import axios from 'axios';




const CourseFormEdit = () => {

    
  
       const params = useParams();
       const { id } = useParams();
       const courseId = params[0];
       
       const history = useHistory();

       const [title, setTitle] = useState('');
       const [category, setCategory] = useState('');
       const [date, setDate] = useState('');
       const [shortDescription, setShortDescription] = useState('');
       const [location, setLocation] = useState('');
       const [duration, setDuration] = useState('');
       const [capacity, setCapacity] = useState('');
       const [longDescription, setLongDescription] = useState('');
    
      
          

        ///this userEffect will roun with mounting the component and populate the fields
    useEffect(() => {
        
        axios.get(`http://localhost:8142/course/${courseId}`)
            .then(res => {
               
                setTitle(res.data.title)
                setTitle(res.data.title)
                setCategory(res.data.category)
                setDate(res.data.date)
                setShortDescription(res.data.shortDescription)
                setLocation(res.data.location)
                setDuration(res.data.duration)
                setCapacity(res.data.capacity)
                setLongDescription(res.data.longDescription)
                
            })
                  

        },[])



           function handleSubmit (e){
            e.preventDefault();
           
            const courseFormData = {
                title : title,
                category : category,
                date : date,
                shortDescription : shortDescription,
                location : location,
                duration : duration,
                capacity : capacity,
                longDescription : longDescription,

            }
            //http://localhost:8142/senseidash/"+senseidashId+""+
            axios.put(`http://localhost:8142/course/${courseId}`, courseFormData)
            .then(res => {
                setTitle("");
                setCategory("");
                setDate("");
                setShortDescription("");
                setLocation("");
                setDuration("");
                setCapacity("");
                setLongDescription("");
                history.push('/senseidash/senseiclasstable')
                refreshPage();


            })




            .catch(
                err => {
                    console.log(err)
                }
            )                 

        }

        function refreshPage(){
            window.location.reload()
        }


      
      
        


    return (
        <Container>

          
        <br />
            <Row>
                <Col></Col>
                
                <Col>
                    <Alert variant="primary">
                        <Form>
                            <Form.Group  controlId="courseform">

                                <Form.Group controlId="formBasicTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title Of The Course" 
                                        value={title} onChange={e => setTitle (e.target.value)}

                                    />
                                </Form.Group>


                                <Form.Group controlId="formBasicSortDescription">

                                    <Form.Label>Short Description</Form.Label>
                                    <Form.Control type="text" placeholder="Short Description in 10 words or less" 
                                       value={shortDescription} onChange={e => setShortDescription (e.target.value)}
                                    />

                                </Form.Group>


                                <Form.Row>


                                    <Form.Group as={Col} controlId="formStartingDate">
                                        <Form.Label>Starting Date</Form.Label>
                                        <Form.Control type="text" placeholder="MM/DD/YY"
                                         value={date} onChange={e => setDate (e.target.value)}
                                         />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formDuration">
                                        <Form.Label>Duration</Form.Label>
                                        <Form.Control type="text" placeholder="#"
                                          value={duration} onChange={e => setDuration (e.target.value)}
                                         />
                                    </Form.Group>


                                    <Form.Group  controlId="formCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="text" placeholder="Category" 
                                        value={category} onChange={e => setCategory (e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formCapacity">
                                        <Form.Label>Capacity</Form.Label>
                                        <Form.Control type="text" placeholder="#" 
                                        value={capacity} onChange={e => setCapacity (e.target.value)}
                                        />
                                    </Form.Group>
                                    

                                    <Form.Group controlId="formBasicLocation">

                                        <Form.Label>Location</Form.Label>
                                        <Form.Control type="text" placeholder="Location"
                                          value={location} onChange={e => setLocation (e.target.value)}
                                         />

                                    </Form.Group>



                                    <Form.Group controlId="longDescription">
                                        <Form.Label>Long Description</Form.Label>
                                        <Form.Control as="textarea" rows={4} type="text" placeholder="Long Description"
                                          value={longDescription} onChange={e => setLongDescription (e.target.value)}
                                         />
                                    </Form.Group>



                                </Form.Row>



                            </Form.Group>

                            <Button variant="primary" type="submit"
                            onClick={handleSubmit}
                            >
                                Submit Changes
                            </Button>
                        </Form>

                    </Alert>
                </Col>


                <Col></Col>
            </Row>
        </Container>

    )
}

export default CourseFormEdit
