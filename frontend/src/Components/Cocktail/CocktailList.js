import React, { useEffect, useState } from 'react';

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://example.com/api/cocktails');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCocktails(data);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
        setError(error.message);
      }
    };

    fetchCocktails();
  }, []);

  if (error) {
    return <div>Error fetching cocktails: {error}</div>;
  }

  return (
    <div>
      <h1>Cocktail List</h1>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>{cocktail.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailList;
