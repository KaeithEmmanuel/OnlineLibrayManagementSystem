import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('admin');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/auth/login', { username, password, role: selectedRole });
      if (res.data.login && (res.data.role === 'admin' || res.data.role === 'student')) {
        setRole(res.data.role);
        if (res.data.role === 'admin') {
          navigate('/dashboard');
        } else if (res.data.role === 'student') {
          navigate('/');
        }
      } else {
        // Handle invalid login
        console.log('Invalid username or password');
      }
    } catch (err) {
      // Handle network errors or other exceptions
      console.log('An error occurred:', err.message);
    }
  };

  return (
    <div>
      <div className='login-page'>
        <div className='login-container'>
          <h2>Login</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select name='role' id="role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </select>
            </div>
            <button type="submit" className="btn-login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
