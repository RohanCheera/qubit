import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './work.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

function Work() {
  const [projects, setProjects] = useState([]);
  axios.defaults.withCredentials=true;
  useEffect(() => {
    // Fetch projects from the API endpoint using Axios
    axios.get('https://backend-eosin-rho.vercel.app/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });

    // Initialize AOS library
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      delay: 200,
    });

    return () => AOS.refresh();
  }, []);

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="work">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="work-card"
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Alternating animations
          onClick={() => handleCardClick(project.link)}
        >
          <div className="workcard-content-left">
            <Card.Img variant="top" src={project.cover} />
            <div className="overlay">
              <div className="overlay-text">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p>Technologies: {project.tech.join(', ')}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Work;
