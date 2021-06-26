import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { MDBDataTable } from 'mdbreact';
// import "./style.css";
import axios from "axios";

const Table = () => {

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
    async function allEmployees() {
      
      let response = await axios.get('https://randomuser.me/api/?results=200&nat=us')
      
      let employees = response.data.results.map(employee => {
        return {
          // first: employee.name.first,
          // last: employee.name.last,
          // email: employee.email,
          // picture: <img src={employee.picture.thumbnail} alt={employee.name.first} />,

                //  title : employees.title,
                // category : employees.category,
                // date : employees.date,
                // shortDescription : employees.shortDescription,
                // location : employees.location,
                // duration : employees.duration,
                // capacity : employees.capacity,
                // longDescription : employees.longDescription,
        
        }
      });
      setRow(employees); //here should match with our data
    }
    allEmployees()
  }, [])


  

  return (

      <Container>
          <Row>
            <Col></Col>

            <Col>

                     <MDBDataTable
                       className='table'
                        striped
                        bordered
                        data={{ columns, rows }}
                         />

            </Col>

            <Col></Col>
          </Row>
       </Container>
  
  
       );
}

export default Table;
