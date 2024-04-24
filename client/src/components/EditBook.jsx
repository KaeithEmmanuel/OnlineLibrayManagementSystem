import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../css/AddBook.css'
import { useNavigate, useParams } from 'react-router-dom'
function EditBook() {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate=useNavigate()
    const  {id}=useParams()

    useEffect(() => {
      axios.post('http://localhost:3001/book/book/'+id)
      .then(res => {
        setName(res.data.name)
        setAuthor(res.data.author)
        setImageUrl(res.data.imageUrl)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.put('http://localhost:3001/book/book/'+id, {name,author,imageUrl})
            if(res.data.updated){
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
            <h2>Edit Book</h2>
            <div className="form-group">
                <label htmlFor="book">Book Name</label>
                <input type="text" name="book" id="book" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author Name:</label>
                <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="Image">Image URL:</label>
                <input type="text" name="Image" id="Image" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />     
            </div>
            <button type="submit" className='btn-student' >Update </button>
        </form>
    </div>
  )
}

export default EditBook
