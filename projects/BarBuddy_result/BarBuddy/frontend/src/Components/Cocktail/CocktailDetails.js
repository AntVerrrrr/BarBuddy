// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../Navbar';
// // import '../../assets/css/CocktailDetails.css'; // 추가적인 스타일 필요 시

// function CocktailDetails() {
//   const { id } = useParams();
//   const [cocktail, setCocktail] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3001/api/cocktails/${id}`)
//       .then(response => response.json())
//       .then(data => setCocktail(data))
//       .catch(error => console.error('Error fetching cocktail details:', error));
//   }, [id]);

//   if (!cocktail) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <h1>{cocktail.name}</h1>
//         <img src={`http://localhost:3001${cocktail.image_path}`} alt={cocktail.name} />
//         <p>Base Spirit: {cocktail.base_spirit.join(', ')}</p>
//         <p>Category: {cocktail.category}</p>
//         <p>Garnish: {cocktail.garnish}</p>
//         <p>Glass Type: {cocktail.glass_type}</p>
//         <p>Instructions: {cocktail.instructions}</p>
//         <p>Description: {cocktail.description}</p>
//         <p>Alcohol Degree: {cocktail.alcohol_degree}</p>
//         <p>Ingredients: {cocktail.ingredients.join(', ')}</p>
//       </div>
//     </div>
//   );
// }

// export default CocktailDetails;




//2번쨰
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import Navbar from '../Navbar';
// // import '../../assets/css/CocktailDetails.css'; // 추가적인 스타일 필요 시

// function CocktailDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [cocktail, setCocktail] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3001/api/cocktails/${id}`)
//       .then(response => response.json())
//       .then(data => setCocktail(data))
//       .catch(error => console.error('Error fetching cocktail details:', error));
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/api/cocktails/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         navigate('/cocktails');
//       } else {
//         const errorData = await response.json();
//         console.error('Error deleting cocktail:', errorData);
//       }
//     } catch (error) {
//       console.error('Error deleting cocktail:', error);
//     }
//   };

//   if (!cocktail) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <h1>{cocktail.name}</h1>
//         <img src={`http://localhost:3001${cocktail.image_path}`} alt={cocktail.name} />
//         <p>Base Spirits: {cocktail.base_spirits ? cocktail.base_spirits.join(', ') : 'None'}</p>
//         <p>Category: {cocktail.category}</p>
//         <p>Garnish: {cocktail.garnish}</p>
//         <p>Glass Type: {cocktail.glass_type}</p>
//         <p>Instructions: {cocktail.instructions}</p>
//         <p>Description: {cocktail.description}</p>
//         <p>Alcohol Degree: {cocktail.alcohol_degree}</p>
//         <p>Ingredients: {cocktail.ingredients ? cocktail.ingredients.join(', ') : 'None'}</p>
//         <Link to={`/cocktails/${cocktail.id}/edit`}>
//           <button>Edit</button>
//         </Link>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default CocktailDetails;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar';
// import '../../assets/css/CocktailDetails.css'; // 추가적인 스타일 필요 시

function CocktailDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState(null);
  const [spirits, setSpirits] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/cocktails/${id}`)
      .then(response => response.json())
      .then(data => setCocktail(data))
      .catch(error => console.error('Error fetching cocktail details:', error));
  }, [id]);

  useEffect(() => {
    if (cocktail && cocktail.base_spirits) {
      Promise.all(cocktail.base_spirits.map(spirit =>
        fetch(`http://localhost:3001/api/spirits/byName/${spirit}`)
          .then(response => response.json())
      ))
      .then(data => setSpirits(data))
      .catch(error => console.error('Error fetching spirits:', error));
    }
  }, [cocktail]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/cocktails/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/cocktails');
      } else {
        const errorData = await response.json();
        console.error('Error deleting cocktail:', errorData);
      }
    } catch (error) {
      console.error('Error deleting cocktail:', error);
    }
  };

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{cocktail.name}</h1>
        <img src={`http://localhost:3001${cocktail.image_path}`} alt={cocktail.name} />
        <p>Base Spirits: {cocktail.base_spirits ? cocktail.base_spirits.join(', ') : 'None'}</p>
        <p>Category: {cocktail.category}</p>
        <p>Garnish: {cocktail.garnish}</p>
        <p>Glass Type: {cocktail.glass_type}</p>
        <p>Instructions: {cocktail.instructions}</p>
        <p>Description: {cocktail.description}</p>
        <p>Alcohol Degree: {cocktail.alcohol_degree}</p>
        <p>Ingredients: {cocktail.ingredients ? cocktail.ingredients.join(', ') : 'None'}</p>
        <Link to={`/cocktails/${cocktail.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="container">
        <h2>Base Spirits for this Cocktail</h2>
        <div className="spirit-list">
          {spirits.map(spirit => (
            <div key={spirit.id} className="spirit-card">
              <img src={`http://localhost:3001${spirit.image_path}`} alt={spirit.name} />
              <h2>{spirit.name}</h2>
              <p>Type: {spirit.type}</p>
              <p>Alcohol Degree: {spirit.alcohol_degree}</p>
              <p>Price: {spirit.price}</p>
              <Link to={`/spirits/${spirit.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CocktailDetails;