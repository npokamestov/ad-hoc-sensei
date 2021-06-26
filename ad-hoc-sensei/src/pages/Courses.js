import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
// import "./style.css";
import axios from "axios";

const Table = () => {

  const [rows, setRow] = useState([]);
  const [columns] = useState([
    
        {
        label: 'Course Title',
        field: 'last',
        sort: 'dsc',
        width: 50
        },   

        {
        label: 'Sensei First Name',
        field: 'first',
        sort: 'dsc',
        width: 50
        },

        {
        label: 'Sensei Last Name',
        field: 'first',
        sort: 'dsc',
        width: 50
            },
    
        {
        label: 'Description',
        field: 'email',
        sort: 'dsc',
        width: 50
        },

        {
        label: 'Start Date',
        field: 'picture',
        sort: 'dsc',
        width: 10
        },

        {
        label: 'REGISTER BUTTON',
        field: 'picture',
        sort: 'dsc',
        width: 10
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
      className='table'
      striped
      bordered
      data={{columns,rows}}
    />
  );
}

export default Table;
