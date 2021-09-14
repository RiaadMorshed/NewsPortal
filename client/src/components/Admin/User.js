import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userFormData = new FormData();
        userFormData.append('photo', newUser.photo);
        userFormData.append('birthdate', newUser.birthdate);
        userFormData.append('name', newUser.name);
        
        console.log(newUser)
        axios({
            method: "post",
            url: "http://localhost:5000/users/add/",
            data: userFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
            />

            <input 
                type="date"
                name="birthdate"
                value={newUser.date}
                onChange={handleChange}
            />

            <input 
                type="submit"
            />
        </form>
    );
}

export default User;