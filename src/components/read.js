import React from 'react'
import {Table,Button} from 'semantic-ui-react'
import { useEffect,useState } from 'react'
import { API_URL } from '../Constants/URL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './read.css';


const Read = () => {
  const [apiData,setAPIData]=useState([])
  const navigate = useNavigate()

  const updateUser = ({studentname,age,collegename,yop,id}) => {
    localStorage.setItem('id',id)
    localStorage.setItem('studentname',studentname)
    localStorage.setItem('age',age)
    localStorage.setItem('collegename',collegename)
    localStorage.setItem('yop',yop)
    navigate('/update')
  }

  const deleteUser = async (id) => {
    await axios.delete(API_URL + "/" + id)
    callGetAPI()
  }

  const callGetAPI = async () => {
    const response = await axios.get(API_URL)
    setAPIData(response.data)
  }

  useEffect( ()=>{
    callGetAPI()
  },[])
  return (
    <div className='read-section'>
      <Table className='table-body' singleLine>
         <Table.Header>
          <Table.Row className='table-headercell'>
             <Table.HeaderCell>Student Name</Table.HeaderCell>
             <Table.HeaderCell>Age</Table.HeaderCell>
             <Table.HeaderCell>College Name</Table.HeaderCell>
             <Table.HeaderCell>Year Of Passing</Table.HeaderCell>
             <Table.HeaderCell>Delete</Table.HeaderCell>
             <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
         </Table.Header>
        

         <Table.Body>
           {
            apiData.map(data =>(
              <Table.Row key ={data.id}>
              <Table.Cell>{data.studentname}</Table.Cell>
              <Table.Cell>{data.age}</Table.Cell>
              <Table.Cell>{data.collegename}</Table.Cell>
              <Table.Cell>{data.yop}</Table.Cell>
              <Table.Cell><Button onClick={()=>
              deleteUser(data.id)
              }>Delete</Button></Table.Cell>
              <Table.Cell><Button onClick={()=>
              updateUser(data)
              }>Update</Button></Table.Cell>
           </Table.Row>
            )
         
            )
           }
          
         </Table.Body>
         </Table>

         <a className='redirect' href='/'>Home</a>
    </div>
         
         )
         
}

export default Read