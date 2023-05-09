// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Header from './Header';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedData = useLoaderData();
    const [usersData, setUsersData] = useState(loadedData)

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert("Successfully Deleted")
                const remaining = usersData.filter(user => user._id !== id);
                setUsersData(remaining)
            }
        })
    };

    return (
        <div className='container mx-auto'>
            <Header />
            <h2 className='text-center'>All Users {usersData.length}</h2>
            <div className="row">
                {
                    usersData.map((user) => {
                        return (
                            <div className='col-lg-4 mb-3' key={user._id}>
                                <div className='card shadow-lg bg-info text-white p-3'>
                                    <p><strong>Name:</strong> {user?.name}</p>
                                    <p><strong>Email:</strong> {user?.email}</p>
                                    <p><strong>Phone Number:</strong> {user?.phone}</p>
                                    <Link to={`/users/${user._id}`}>
                                        <button className="btn btn-success w-100 mb-4">Update</button>
                                    </Link>
                                    <button onClick={()=> handleDelete(user._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Users;