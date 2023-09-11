import React, { useState } from 'react'
import { Button, Form} from 'semantic-ui-react'
import axios from 'axios'
import {API_URL} from '../Constants/URL'
import { useNavigate } from 'react-router-dom'


const Create = () => {

  const [studentname,setStudentName]=useState('')
  const [age,setAge]=useState('')
  const [collegename,setCollegeName]=useState('')
  const [yop,setYop]=useState('')
  const navigate =useNavigate()

  const postData = async() => {
   await axios.post( API_URL, {
      studentname,
      age,
      collegename,
      yop,
    })
    navigate('/read')
  }

  return (
    <Form className="form">
       <Form.Field className='form-field' >
       <label>Student Name</label>
       <input onChange={(event)=> setStudentName(event.target.value)} value={studentname} type='text' placeholder='Enter Your Name'/>
       </Form.Field>
       <Form.Field className='form-field'>
       <label>Age</label>
       <input onChange={(event)=> setAge(event.target.value)} value={age} type='text' placeholder='Enter Your Age'/>
       </Form.Field>
       <Form.Field className='form-field'>
       <label>College Name</label>
       <input onChange={(event)=> setCollegeName(event.target.value)}value={collegename} type='text' placeholder='Enter The College Name'/>
       </Form.Field>
       <Form.Field className='form-field'>
       <label>Year Of Passing</label>
       <input onChange={(event)=> setYop(event.target.value)} value={yop} type='text' placeholder='YOP'/>
       </Form.Field>
       <Form.Field>
        <Button onClick={postData}>Submit</Button>
       </Form.Field>
    </Form>
  )
}

export default Create