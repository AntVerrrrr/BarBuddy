// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';
// import '../../assets/css/CocktailList.css'; // 스타일 재사용을 위해

// function SpiritDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [spirit, setSpirit] = useState(null);
//   const [cocktails, setCocktails] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3001/api/spirits/${id}`)
//       .then(response => response.json())
//       .then(data => setSpirit(data))
//       .catch(error => console.error('Error fetching spirit details:', error));
//   }, [id]);

//   useEffect(() => {
//     if (spirit) {
//       fetch(`http://localhost:3001/api/cocktails/byBaseSpirit/${spirit.name}`)
//         .then(response => response.json())
//         .then(data => setCocktails(data))
//         .catch(error => console.error('Error fetching cocktails:', error));
//     }
//   }, [spirit]);

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/api/spirits/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         navigate('/spirits');
//       } else {
//         const errorData = await response.json();
//         console.error('Error deleting spirit:', errorData);
//       }
//     } catch (error) {
//       console.error('Error deleting spirit:', error);
//     }
//   };

//   if (!spirit) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <br /><br />
//       <br /><br />
//       <div className="container">
//         <h1>Spirit Details</h1>
//         <p>Name: {spirit.name}</p>
//         <p>Type: {spirit.type}</p>
//         <p>Alcohol Degree: {spirit.alcohol_degree}</p>
//         <p>Price: {spirit.price}</p>
//         <p>Description: {spirit.description}</p>
//         <img src={`http://localhost:3001${spirit.image_path}`} alt={spirit.name} />
//         <Link to={`/spirits/${spirit.id}/edit`}>
//           <button>Edit</button>
//         </Link>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//       <div className="container">
//         <h2>Cocktails made with {spirit.name}</h2>
//         <div className="cocktail-list">
//           {cocktails.map(cocktail => (
//             <div key={cocktail.id} className="cocktail-card">
//               <img src={`http://localhost:3001${cocktail.image_path}`} alt={cocktail.name} />
//               <h2>{cocktail.name}</h2>
//               <p>Base Spirits: {cocktail.base_spirits ? cocktail.base_spirits.join(', ') : 'None'}</p>
//               <Link to={`/cocktails/${cocktail.id}`}>View Details</Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SpiritDetails;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../assets/css/CocktailList.css'; // 스타일 재사용을 위해

function SpiritDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [spirit, setSpirit] = useState(null);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/spirits/${id}`)
      .then(response => response.json())
      .then(data => setSpirit(data))
      .catch(error => console.error('Error fetching spirit details:', error));
  }, [id]);

  useEffect(() => {
    if (spirit) {
      fetch(`http://localhost:3001/api/cocktails/byBaseSpirit/${spirit.name}`)
        .then(response => response.json())
        .then(data => setCocktails(data))
        .catch(error => console.error('Error fetching cocktails:', error));
    }
  }, [spirit]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/spirits/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/spirits');
      } else {
        const errorData = await response.json();
        console.error('Error deleting spirit:', errorData);
      }
    } catch (error) {
      console.error('Error deleting spirit:', error);
    }
  };

  if (!spirit) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <br /><br />
      <br /><br />
      <div className="container">
        <h1>Spirit Details</h1>
        <p>Name: {spirit.name}</p>
        <p>Type: {spirit.type}</p>
        <p>Alcohol Degree: {spirit.alcohol_degree}</p>
        <p>Price: {spirit.price}</p>
        <p>Description: {spirit.description}</p>
        <img src={`http://localhost:3001${spirit.image_path}`} alt={spirit.name} />
        <Link to={`/spirits/${spirit.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>

      
      <div className="container">
        <h2>Cocktails made with {spirit.name}</h2>
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

export default SpiritDetails;