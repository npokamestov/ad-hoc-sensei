import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from "axios";

const StudentClassTable = () => {

  const [rows, setRow] = useState([]);
  const [columns] = useState([
    
        {
        label: 'Course Name',
        field: 'last',
        sort: 'dsc',
        width: 50
        },   

        {
        label: 'Description',
        field: 'first',
        sort: 'dsc',
        width: 100
        },
    
        {
        label: 'Date',
        field: 'email',
        sort: 'dsc',
        width: 10
        },

        {
        label: 'Location',
        field: 'picture',
        sort: 'dsc',
        width: 25
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
    <MDBDataTable
      entriesOptions={[3, 5, 10]}
      className='table'
      striped
      bordered
      data={{columns,rows}}
    />
  );
}

export default StudentClassTable;