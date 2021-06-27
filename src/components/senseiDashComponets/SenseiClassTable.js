import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom';
import axios from "axios";


const SenseiClassTable = () => {
  



  const history = useHistory();
  const [rows, setRow] = useState([]);
  const [columns] = useState([


    {
      label: 'Id',
      field: 'course_id',
      sort: 'dsc',
      width: 4
    },

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
          {
            label: 'Edit',
            field: 'Edit',
            sort: 'dsc',
            width: 10
            },
            {
              label: 'Delete',
              field: 'Delete',
              sort: 'dsc',
              width: 10
              }
          

     ]);



  function handleEdit(courseId) {
    
    history.push(`/senseidash/courseformedit/${courseId}`)
     refreshPage()

  }


  function handleDelete(courseId) {
    console.log("handleDelete" +courseId)
  }





  function refreshPage() {
    window.location.reload();
  }
   

  
  
  useEffect(() => {


    async function allCourses() {
      //https://randomuser.me/api/?results=200&nat=us  ==>this is sample of api
      let response = await axios.get('http://localhost:8142/user/1')
      
            
       let courseData = response.data.senseisCreatedCourses.map(listOfCourses => {
               
        return {
          
                course_id: listOfCourses.courseId,
                title : listOfCourses.title,
                category : listOfCourses.category,
                date : listOfCourses.date,
                shortDescription : listOfCourses.shortDescription,
                location : listOfCourses.location,
                duration : listOfCourses.duration,
                capacity : listOfCourses.capacity,
                longDescription : listOfCourses.longDescription,
                Edit :  <Button variant="info"  onClick={() => handleEdit(listOfCourses.courseId)}>Edit</Button>,
                Delete :  <Button variant="danger"  onClick={() => handleDelete(listOfCourses.courseId)}>Delete</Button>
               
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

export default SenseiClassTable;