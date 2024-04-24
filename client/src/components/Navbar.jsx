import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = ({role}) => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <Link to='/' className='navbar-brand'><span>Online Book Store</span></Link>
        </div>
        <div className='navbar-right'>
          <Link to="/books" className='navbar-link'>Books</Link>
          {role === "admin" &&
            <>
              <Link to="/addbook" className='navbar-link'>AddBook</Link>
              <Link to="/addstudent" className='navbar-link'>AddStudent</Link>
              <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
            </>
          }
          { role === "" ?<Link to="/login" className='navbar-link'>Login</Link>:
           <Link to="/" className='navbar-link'>Logout</Link>
        }
        </div>
    </div>
  )
}

export default Navbar
