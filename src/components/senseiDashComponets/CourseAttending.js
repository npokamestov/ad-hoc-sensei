import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MDBDataTable } from 'mdbreact';
import axios from "axios";

const CourseAttending = () => {

  const [senseidashId , setSenseidashId] = useState(1)
  const [rows, setRow] = useState([]);
  const [columns] = useState([
    
        {
        label: 'Course Title',
        field: 'title',
        sort: 'dsc',
        width: 50
        },

        {
        label: 'Description',
        field: 'shortDescription',
        sort: 'dsc',
        width: 50
        },

        {
        label: 'Starting Date',
        field: 'date',
        sort: 'dsc',
        width: 50
            },
    
        {
        label: 'Location',
        field: 'location',
        sort: 'dsc',
        width: 50
        },

        {
        label: 'Duration',
        field: 'duration',
        sort: 'dsc',
        width: 10
        },

        {
        label: 'Category',
        field: 'category',
        sort: 'dsc',
        width: 10
        },
        {
          label: 'Capacity',
          field: 'capacity',
          sort: 'dsc',
          width: 10
          },
         

     ]);


   
  
  useEffect(() => {


    async function allCourses() {
      //we need to add a serch area of associated sensei
      let response = await axios.get(`http://localhost:8142/course?senseiId=${senseidashId}`)
      
            
       let courseData = response.data.map(listOfCourses => {
               
        return {
          
          
                title : listOfCourses.title,
                category : listOfCourses.category,
                date : listOfCourses.date,
                shortDescription : listOfCourses.shortDescription,
                location : listOfCourses.location,
                duration : listOfCourses.duration,
                capacity : listOfCourses.capacity,
                longDescription : listOfCourses.longDescription,
                
               
        }
      });
      setRow(courseData); 
     
    }
    allCourses()
  }, [])


  

  return (

      <Container>
          <Row>
            

            <Col>

                     <MDBDataTable
                       className='table'
                        striped
                        bordered
                        data={{ columns, rows }}
                         
                           
                         />

            </Col>

            
          </Row>
       </Container>
  
  
       );

}

export default CourseAttending;