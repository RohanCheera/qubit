import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import './singleworkpage.css';
import axios from 'axios';

const SingleWorkPage = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [link, setLink] = useState('');

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'drakonix2904');

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dgpggx2va/image/upload',
        {
          method: 'POST',
          body: formData
        }
      );
      const data = await response.json();
      setImage(data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send POST request to backend API
      await axios.post('http://localhost:8800/api/projects', {
        title,
        desc: description,
        tech: techStack.split(','), // Convert techStack to an array
        cover: image,
        link
      });
      // Reset form fields
      setTitle('');
      setDescription('');
      setTechStack('');
      setLink('');
      setImage(null);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error('Error posting project:', error);
      // Handle error - show error message to user, etc.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Tech Stack (comma-separated)"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input type="file" onChange={handleUpload} />
        <button type="submit">Submit</button>
      </form>
      {image && <Image cloudName="dgpggx2va" publicId={image} />}
    </div>
  );
};

export default SingleWorkPage;
