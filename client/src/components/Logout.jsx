import React, { useEffect, useNavigate } from "react";
import axios from "axios";

const Logout = ({ setRole }) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data.logout) {
          setRole(" ");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
};

export default Logout;
