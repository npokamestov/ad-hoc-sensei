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
  
  
  //later we neet to match this with login id
  const [senseidashId , setSenseidashId] = useState(1)
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
   /// console.log("handleDelete" +courseId)
     axios.delete(`http://localhost:8142/course${courseId}`)
    .then((err)=>{console.log(err)})
   // refreshPage()
  }



   function refreshPage() {
    window.location.reload();
  }
   

  
  
  useEffect(() => {


    async function allCourses() {
      
      let response = await axios.get(`http://localhost:8142/course?senseiId=${senseidashId}`)
      
            
       let courseData = response.data.map(listOfCourses => {
        
        return {
          
                course_id: listOfCourses.id,
                title : listOfCourses.title,
                category : listOfCourses.category,
                date : listOfCourses.date,
                shortDescription : listOfCourses.shortDescription,
                location : listOfCourses.location,
                duration : listOfCourses.duration,
                capacity : listOfCourses.capacity,
                longDescription : listOfCourses.longDescription,
                Edit :  <Button variant="info"  onClick={() => handleEdit(listOfCourses.id)}>Edit</Button>,
                Delete :  <Button variant="danger"  onClick={() => handleDelete(listOfCourses.id)}>Delete</Button>
               
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