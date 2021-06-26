import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import "./style.css";
import axios from "axios";

const Table = () => {

  const [rows, setRow] = useState([]);
  const [columns] = useState([
    
        {
        label: 'Last',
        field: 'last',
        sort: 'dsc',
        width: 100
        },   

        {
        label: 'First',
        field: 'first',
        sort: 'dsc',
        width: 100
        },
    
        {
        label: 'Email',
        field: 'email',
        sort: 'dsc',
        width: 100
        },

        {
        label: 'Photo',
        field: 'picture',
        sort: 'dsc',
        width: 100
        },
     ]);
 

  
  useEffect(() => {
    async function allEmployees() {
      
      let response = await axios.get('https://randomuser.me/api/?results=200&nat=us')
      
      let employees = response.data.results.map(employee => {
        return {
          first: employee.name.first,
          last: employee.name.last,
          email: employee.email,
          picture: <img src={employee.picture.thumbnail} alt={employee.name.first} />
        }
      });
      setRow(employees); 
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