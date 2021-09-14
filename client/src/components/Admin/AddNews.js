import React, { useState } from 'react';
import axios from 'axios';

const AddNews = () => {
    const [newNews, setNewNews] = useState(
        {
            photo: '',
            title: '',
            author: '',
            description: '',
            category: ''
        }
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userFormData = new FormData();
        userFormData.append('photo', newNews.photo);
        userFormData.append('title', newNews.title);
        userFormData.append('author', newNews.author);
        userFormData.append('description', newNews.description);
        userFormData.append('category', newNews.category);
        
        console.log(newNews)
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
        setNewNews({...newNews, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewNews({...newNews, photo: e.target.files[0]});
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
                placeholder="title"
                name="title"
                value={newNews.title}
                onChange={handleChange}
            />

            <input 
                type="text"
                placeholder="author"
                name="author"
                value={newNews.author}
                onChange={handleChange}
            />
            <input 
            type="text"
            placeholder="description"
            name="description"
            value={newNews.description}
            onChange={handleChange}
            />

            <input 
                type="text"
                placeholder="category"
                name="category"
                value={newNews.category}
                onChange={handleChange}
            />
            <input 
                type="submit"
            />
        </form>
    );
}

export default AddNews;