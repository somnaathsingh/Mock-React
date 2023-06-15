import React from 'react';
import './Body.css';
import Header from './Header';
import { useSelector } from 'react-redux';

const Introduction = ()=>{
    const user = useSelector(state => state.user.user);
    return(
        <div>
            <Header/>

   <div className="content">
    <h2>Hello {user.name},
          Welcome to Arthmate</h2>
        <h2 style={{ color: 'red' }}>Embedded Finance as a Service</h2>
        <p>
            Arthmate offers a complete suite of Cloud based financial services enabling on demand deployment of credit and lending technology for Fintechs, Digital Platforms and SME Anchors.
          
        </p>
        <h2 style={{ color: 'red' }}>Services</h2>
        <p>
                <ul >
                    <li>Credit Exchange</li>
                    <li>Credit Cloud</li>
                    <li>Risk Engine</li>
                </ul>
                </p>

                <h2 style={{ color: 'red' }}>Products</h2>
                <p>
                <ul >
                    <li>A-Score</li>
                    <li>B-Score</li>
                    <li>C-Score</li>
                    <li>E-Score</li>
                    <li>Business Rule Engine</li>
                    <li>Cross-Sell Prospensity Engine</li>
                    <li>Parser</li>

                </ul>
                </p>


      </div> 
      </div>
    );
};

export default Introduction;
