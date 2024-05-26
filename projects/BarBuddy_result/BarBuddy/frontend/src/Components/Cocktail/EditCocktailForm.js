// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function EditCocktailForm() {
//   const { id } = useParams();
//   const [cocktail, setCocktail] = useState({
//     name: '',
//     base_spirit: '',
//     category: '',
//     garnish: '',
//     glass_type: '',
//     instructions: '',
//     description: '',
//     alcohol_degree: '',
//     image: null,
//     ingredients: ['']
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://localhost:3001/api/cocktails/${id}`)
//       .then(response => response.json())
//       .then(data => setCocktail({ ...data, ingredients: JSON.parse(data.ingredients) }))
//       .catch(error => console.error('Error fetching cocktail details:', error));
//   }, [id]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', cocktail.name);
//     formData.append('base_spirit', cocktail.base_spirit);
//     formData.append('category', cocktail.category);
//     formData.append('garnish', cocktail.garnish);
//     formData.append('glass_type', cocktail.glass_type);
//     formData.append('instructions', cocktail.instructions);
//     formData.append('description', cocktail.description);
//     formData.append('alcohol_degree', cocktail.alcohol_degree);
//     formData.append('image', cocktail.image);
//     formData.append('ingredients', JSON.stringify(cocktail.ingredients));

//     try {
//       const response = await fetch(`http://localhost:3001/api/cocktails/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       navigate(`/cocktails/${id}`);
//     } catch (error) {
//       console.error('Error updating cocktail:', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCocktail({ ...cocktail, [name]: value });
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setCocktail({ ...cocktail, image: file });
//   };

//   const handleIngredientChange = (index, event) => {
//     const newIngredients = [...cocktail.ingredients];
//     newIngredients[index] = event.target.value;
//     setCocktail({ ...cocktail, ingredients: newIngredients });
//   };

//   const handleAddIngredient = () => {
//     setCocktail({ ...cocktail, ingredients: [...cocktail.ingredients, ''] });
//   };

//   const handleRemoveIngredient = (index) => {
//     const newIngredients = cocktail.ingredients.filter((_, i) => i !== index);
//     setCocktail({ ...cocktail, ingredients: newIngredients });
//   };

//   return (
//     <div>
//       <h1>Edit Cocktail</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={cocktail.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Base Spirit:
//           <input type="text" name="base_spirit" value={cocktail.base_spirit} onChange={handleChange} required />
//         </label>
//         <label>
//           Category:
//           <input type="text" name="category" value={cocktail.category} onChange={handleChange} />
//         </label>
//         <label>
//           Garnish:
//           <input type="text" name="garnish" value={cocktail.garnish} onChange={handleChange} />
//         </label>
//         <label>
//           Glass Type:
//           <input type="text" name="glass_type" value={cocktail.glass_type} onChange={handleChange} />
//         </label>
//         <label>
//           Instructions:
//           <textarea name="instructions" value={cocktail.instructions} onChange={handleChange} />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={cocktail.description} onChange={handleChange} />
//         </label>
//         <label>
//           Alcohol Degree:
//           <input type="text" name="alcohol_degree" value={cocktail.alcohol_degree} onChange={handleChange} />
//         </label>
//         <label>
//           Image:
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </label>
//         <label>
//           Ingredients:
//           {cocktail.ingredients.map((ingredient, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={ingredient}
//                 onChange={(e) => handleIngredientChange(index, e)}
//                 required
//               />
//               {cocktail.ingredients.length > 1 && (
//                 <button type="button" onClick={() => handleRemoveIngredient(index)}>
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}
//           <button type="button" onClick={handleAddIngredient}>
//             Add Ingredient
//           </button>
//         </label>
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// }

// export default EditCocktailForm;
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditCocktailForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState({
    name: '',
    category: '',
    garnish: '',
    glassType: '',
    instructions: '',
    description: '',
    alcoholDegree: '',
    baseSpirits: [''],
    ingredients: [''],
    imagePath: ''
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/cocktails/${id}`)
      .then(response => response.json())
      .then(data => {
        setCocktail({
          name: data.name || '',
          category: data.category || '',
          garnish: data.garnish || '',
          glassType: data.glass_type || '',
          instructions: data.instructions || '',
          description: data.description || '',
          alcoholDegree: data.alcohol_degree || '',
          baseSpirits: data.base_spirits ? JSON.parse(data.base_spirits) : [''],
          ingredients: data.ingredients ? JSON.parse(data.ingredients) : [''],
          imagePath: data.image_path || ''
        });
      })
      .catch(error => console.error('Error fetching cocktail details:', error));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', cocktail.name);
    formData.append('category', cocktail.category);
    formData.append('garnish', cocktail.garnish);
    formData.append('glassType', cocktail.glassType);
    formData.append('instructions', cocktail.instructions);
    formData.append('description', cocktail.description);
    formData.append('alcoholDegree', cocktail.alcoholDegree);
    formData.append('baseSpirits', JSON.stringify(cocktail.baseSpirits));
    formData.append('ingredients', JSON.stringify(cocktail.ingredients));
    if (imageFile) {
      formData.append('image', imageFile);
    } else {
      formData.append('imagePath', cocktail.imagePath);
    }

    try {
      const response = await fetch(`http://localhost:3001/api/cocktails/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        navigate(`/cocktails/${id}`);
      } else {
        const errorData = await response.json();
        console.error('Error updating cocktail:', errorData);
      }
    } catch (error) {
      console.error('Error updating cocktail:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCocktail({ ...cocktail, [name]: value });
  };

  const handleBaseSpiritChange = (index, event) => {
    const newBaseSpirits = [...cocktail.baseSpirits];
    newBaseSpirits[index] = event.target.value;
    setCocktail({ ...cocktail, baseSpirits: newBaseSpirits });
  };

  const handleAddBaseSpirit = () => {
    setCocktail({ ...cocktail, baseSpirits: [...cocktail.baseSpirits, ''] });
  };

  const handleRemoveBaseSpirit = (index) => {
    const newBaseSpirits = cocktail.baseSpirits.filter((_, i) => i !== index);
    setCocktail({ ...cocktail, baseSpirits: newBaseSpirits });
  };

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...cocktail.ingredients];
    newIngredients[index] = event.target.value;
    setCocktail({ ...cocktail, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setCocktail({ ...cocktail, ingredients: [...cocktail.ingredients, ''] });
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = cocktail.ingredients.filter((_, i) => i !== index);
    setCocktail({ ...cocktail, ingredients: newIngredients });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="container">
      <br /><br />
      <br /><br />
      <h1>Edit Cocktail</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={cocktail.name} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={cocktail.category} onChange={handleChange} required />
        </label>
        <label>
          Garnish:
          <input type="text" name="garnish" value={cocktail.garnish} onChange={handleChange} required />
        </label>
        <label>
          Glass Type:
          <input type="text" name="glassType" value={cocktail.glassType} onChange={handleChange} required />
        </label>
        <label>
          Instructions:
          <textarea name="instructions" value={cocktail.instructions} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={cocktail.description} onChange={handleChange} required />
        </label>
        <label>
          Alcohol Degree:
          <input type="number" step="0.1" name="alcoholDegree" value={cocktail.alcoholDegree} onChange={handleChange} required />
        </label>
        <label>
          Base Spirits:
          {cocktail.baseSpirits.map((baseSpirit, index) => (
            <div key={index}>
              <input
                type="text"
                value={baseSpirit}
                onChange={(e) => handleBaseSpiritChange(index, e)}
                required
              />
              {cocktail.baseSpirits.length > 1 && (
                <button type="button" onClick={() => handleRemoveBaseSpirit(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddBaseSpirit}>Add Base Spirit</button>
        </label>
        <label>
          Ingredients:
          {cocktail.ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e)}
                required
              />
              {cocktail.ingredients.length > 1 && (
                <button type="button" onClick={() => handleRemoveIngredient(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        </label>
        <label>
          Current Image:
          {cocktail.imagePath && <img src={`http://localhost:3001${cocktail.imagePath}`} alt={cocktail.name} width="100" />}
        </label>
        <label>
          New Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditCocktailForm;