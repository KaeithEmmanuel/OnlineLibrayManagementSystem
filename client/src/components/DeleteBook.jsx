import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; 

const DeleteBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const deleteBook = async () => {
            try {
                const res = await axios.delete(`http://localhost:3001/book/book/${id}`);
                if (res.data.deleted) {
                    navigate("/books");
                }
            } catch (err) {
                console.log(err);
            }
        };

        deleteBook(); // Invoke the deleteBook function

    }, [id, navigate]); // Add id and navigate to the dependency array

    // You might want to return some UI elements here, or `null` if the component doesn't render anything
    return null;
};

export default DeleteBook;
