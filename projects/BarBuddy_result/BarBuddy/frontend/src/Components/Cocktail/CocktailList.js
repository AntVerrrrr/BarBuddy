import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/CocktailList.css'; // Reusing the same CSS file for consistency
import Navbar from '../Navbar';

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cocktails')
      .then(response => response.json())
      .then(data => setCocktails(data))
      .catch(error => console.error('Error fetching cocktails:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <br /><br />
      <br /><br />
      <div className="container">
        <h1>Cocktail List</h1>
        <Link to="/cocktails/add" className="add-cocktail-link">Add New Cocktail</Link>
        <div className="cocktail-list">
          {cocktails.map(cocktail => (
            <div key={cocktail.id} className="cocktail-card">
              <img src={`http://localhost:3001${cocktail.image_path}`} alt={cocktail.name} />
              <h2>{cocktail.name}</h2>
              <p>Base Spirits: {cocktail.base_spirits ? cocktail.base_spirits.join(', ') : 'None'}</p>
              <Link to={`/cocktails/${cocktail.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CocktailList;