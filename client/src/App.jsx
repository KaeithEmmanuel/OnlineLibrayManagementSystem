import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import CustomLogin from './components/Login'; 
import Dashboard from './components/dashboard';
import Addstudent from './components/Addstudent';
import AddBook from './components/AddBook';
import Logout from './components/Logout';
import axios from 'axios';
import Edit from './components/EditBook';
import Delete from './components/DeleteBook';

function App() {
  const [role, setRole] = useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify') // Corrected the URL
      .then(res => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar role={role}/>
        <Routes>
          <Route path="/" element={<Home  />}></Route>
          <Route path="/books" element={<Books/>}></Route>
          <Route path="/login" element={<CustomLogin setRole={setRole} />}></Route> 
          <Route path='/addstudent' element={<Addstudent />}></Route>
          <Route path='/addbook' element={<AddBook />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/logout' element={<Logout setRole={setRole}/>}></Route>
          <Route path='/book/:id' element={<Edit/>}></Route>
          <Route path='/delete/:id' element={<Delete/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
