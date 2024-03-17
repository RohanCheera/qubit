import React from 'react'
import './about.css'
import 'bootstrap/dist/css/bootstrap.css'
import Effort from '../../components/Effort/Effort.js'
import Skills from '../../components/Skills/Skills'
import Timeline from '../../components/Timeline/Timeline'
import {Button} from 'react-bootstrap'

function About() {
  return (
    <div className='about-main container-flex'>
      <div className='about '>
        

          <h1 className='about-title-text'>About me</h1>
          <h4 className='aboutme-content' >
          I'm Rohan, an aspiring Data Scientist with a passion for uncovering insights through data analysis. Diligent and driven, I continuously develop my skills in Python, R, and machine learning. I love solving complex problems and presenting findings in clear visualizations.<br/> Let's connect and explore the data-driven world together!
          </h4>
          <Button href='/about' className='aboutme-content-bt'>
            More
          </Button>
     
        {/* <div className='about-logo '></div> */}
      </div>
      <Effort/>
      <Timeline/>
      <Skills/>
      
    </div>
  )
}

export default About