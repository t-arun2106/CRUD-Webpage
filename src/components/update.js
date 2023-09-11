import React ,{useState,useEffect} from 'react'
import {Form,Button} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./update.css";

const Update = () => {

  
  const [studentname,setStudentName]=useState('')
  const [age,setAge]=useState('')
  const [collegename,setCollegeName]=useState('')
  const [yop,setYop]=useState('')
  const [id,setId]=useState('')

  const navigate = useNavigate()
  const updateuser= async () =>{
    await axios.put(API_URL + "/" + id,{
      studentname,
      age,
      collegename,
      yop,
    });

    navigate('/read')
  }



   useEffect(() => {
    console.log(localStorage.getItem('id'))
    console.log(localStorage.getItem('yop'))
    console.log(localStorage.getItem('age'))
   setId(localStorage.getItem('id'))
   setStudentName(localStorage.getItem('studentname'))
   setCollegeName(localStorage.getItem('age'))
   setYop(localStorage.getItem('collegename'))
   },[])


  return (
  <div className='update-section'>
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
    <div>
    <Form.Field>
     <Button onClick={updateuser}>Update</Button>
     <a className='redirect-1' href='/'>
      Home
      </a>
    </Form.Field>
    </div>
 </Form>
  </div>
  )
}

export default Update