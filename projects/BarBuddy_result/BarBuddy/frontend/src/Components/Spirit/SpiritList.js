import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/SpiritList.css';
import Navbar from '../Navbar';

function SpiritList() {
  const [spirits, setSpirits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/spirits')
      .then(response => response.json())
      .then(data => setSpirits(data))
      .catch(error => console.error('Error fetching spirits:', error));
  }, []);

  return (
    <div>
      <br></br><br></br>
      <br></br><br></br>
      <div className="container">
        <h1>Spirit List</h1>
        <Link to="/spirits/add" className="add-spirit-link">Add New Spirit</Link>
        <div className="spirit-list">
          {spirits.map(spirit => (
            <div key={spirit.id} className="spirit-card">
              <img src={`http://localhost:3001${spirit.image_path}`} alt={spirit.name} />
              <h2>{spirit.name}</h2>
              <p>Type: {spirit.type}</p>
              <p>Alcohol Degree: {spirit.alcohol_degree}</p>
              <Link to={`/spirits/${spirit.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpiritList;
