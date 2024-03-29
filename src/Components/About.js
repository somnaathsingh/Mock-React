import React from 'react';
import './Body.css';
import Header from './Header';

const About = ()=>{
    return(
      <div>
        <Header />
   <div className="content">
        <h2>About Us</h2>
        <p>
        Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.
        </p>
      </div> 
      </div>
    );
};

export default About;
