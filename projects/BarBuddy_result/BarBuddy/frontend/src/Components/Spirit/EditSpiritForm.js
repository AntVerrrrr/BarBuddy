import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditSpiritForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [spirit, setSpirit] = useState({
    name: '',
    type: '',
    alcohol_degree: '',
    price: '',
    description: '',
    image_path: ''
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/spirits/${id}`)
      .then(response => response.json())
      .then(data => setSpirit(data))
      .catch(error => console.error('Error fetching spirit:', error));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', spirit.name);
    formData.append('type', spirit.type);
    formData.append('alcohol_degree', spirit.alcohol_degree);
    formData.append('price', spirit.price);
    formData.append('description', spirit.description);
    if (imageFile) {
      formData.append('image', imageFile);
    } else {
      formData.append('image_path', spirit.image_path);
    }

    try {
      const response = await fetch(`http://localhost:3001/api/spirits/${id}`, {
        method: 'PUT',
        body: formData,
      });
      if (response.ok) {
        navigate(`/spirits/${id}`); // Navigate to the spirit detail page after successful update
      } else {
        const errorData = await response.json();
        console.error('Error updating spirit:', errorData);
      }
    } catch (error) {
      console.error('Error updating spirit:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSpirit({ ...spirit, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  return (
    <div>
      <br></br><br></br>
      <br></br><br></br>
      <h1>Edit Spirit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={spirit.name} onChange={handleChange} required />
        </label>
        <label>
          Type:
          <div>
            <label>
              <input type="radio" name="type" value="Whiskey" checked={spirit.type === 'Whiskey'} onChange={handleChange} />
              Whiskey
            </label>
            <label>
              <input type="radio" name="type" value="Vodka" checked={spirit.type === 'Vodka'} onChange={handleChange} />
              Vodka
            </label>
            <label>
              <input type="radio" name="type" value="Rum" checked={spirit.type === 'Rum'} onChange={handleChange} />
              Rum
            </label>
            {/* Add more radio buttons for other types */}
          </div>
        </label>
        <label>
          Alcohol Degree:
          <input type="number" step="0.01" name="alcohol_degree" value={spirit.alcohol_degree} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" step="0.01" name="price" value={spirit.price} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={spirit.description} onChange={handleChange} required />
        </label>
        <label>
          Current Image:
          {spirit.image_path && <img src={`http://localhost:3001${spirit.image_path}`} alt={spirit.name} width="100" />}
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

export default EditSpiritForm;
