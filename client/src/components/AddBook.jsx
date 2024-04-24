import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../css/AddBook.css'
import { useNavigate } from 'react-router-dom'
function AddBook() {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:3001/book/add', {name,author,imageUrl})
            if(res.data.added){
              navigate('/books')
            }else{
              console.log(res)
            }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='student-page'>
        <form className='student-container' onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <div className="form-group">
                <label htmlFor="book">Book Name</label>
                <input type="text" name="book" id="book" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author Name:</label>
                <input type="text" name="author" id="author" onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="Image">Image URL:</label>
                <input type="text" name="Image" id="Image" onChange={(e) => setImageUrl(e.target.value)} />     
            </div>
            <button type="submit" className='btn-student' >Add </button>
        </form>
    </div>
  )
}

export default AddBook
