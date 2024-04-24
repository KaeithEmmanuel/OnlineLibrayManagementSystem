import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../css/Addstudent.css'
import { useNavigate } from 'react-router-dom'
function Addstudent() {
    const [roll, setRoll] = useState('')
    const [username, setUsername] = useState('')
    const [grade, setGrade] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:3001/student/register', {roll, username, grade, password})
            if(res.data.registered){
                navigate('/dashboard')
            }
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='student-page'>
        <form className='student-container' onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className="form-group">
                <label htmlFor="roll">Roll No</label>
                <input type="text" name="roll" id="roll" onChange={(e) => setRoll(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="grade">Grade</label>
                <input type="text" name="grade" id="grade" onChange={(e) => setGrade(e.target.value)}/>     
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" name="Password" id="Password" onChange={(e) => setPassword(e.target.value)} />     
            </div>
            <button type="submit" className='btn-student' >Register</button>
        </form>
    </div>
  )
}

export default Addstudent
