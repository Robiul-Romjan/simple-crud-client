// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData();
    // console.log(user)
    const handleUpdate = (e) => {
         e.preventDefault();
         const form = e.target;
         const name = form.name.value;
         const email = form.email.value;
         const phone = form.phone.value;
         const updateUser = {name, email, phone};
        //  console.log(updateUser)
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount >0){
                alert("successfully updated")
            }
        })
    };

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder='Update name' name='name' defaultValue={user?.name} /><br />
                <input type="text" placeholder='Update email' name='email' defaultValue={user?.email} /><br />
                <input type="number" placeholder='Update Phone number' name='phone' defaultValue={user?.phone} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;