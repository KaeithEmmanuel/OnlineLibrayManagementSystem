import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import "../css/Navbar.css";

const Navbar = ({ role, setRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data.logout) {
          setRole(""); // Ensure you pass setRole as a prop to Navbar
          navigate("/");
          console.log("User logged out");
        }
      })
      
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <span>Online Book Store</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/books" className="navbar-link">
          Books
        </Link>
        {role === "admin" && (
          <>
            <Link to="/addbook" className="navbar-link">
              AddBook
            </Link>
            <Link to="/addstudent" className="navbar-link">
              AddStudent
            </Link>
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
          </>
        )}
        {role === "" ? (
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        ) : (
          <Link to="/" className="navbar-link" onClick={handleLogout}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
