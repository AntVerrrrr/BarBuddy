// import React, { useState } from 'react';

// function AddSpiritForm() {
//   const [spirit, setSpirit] = useState({
//     name: '',
//     type: '',
//     alcohol_degree: '',
//     price: '',
//     description: ''
//   });
//   const [imageFile, setImageFile] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', spirit.name);
//     formData.append('type', spirit.type);
//     formData.append('alcohol_degree', spirit.alcohol_degree);
//     formData.append('price', spirit.price);
//     formData.append('description', spirit.description);
//     formData.append('image', imageFile);

//     try {
//       const response = await fetch('http://localhost:3001/api/spirits', {
//         method: 'POST',
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Spirit added successfully:', data);
//     } catch (error) {
//       console.error('Error adding spirit:', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSpirit({ ...spirit, [name]: value });
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setImageFile(file);
//   };

//   return (
//     <div>
//       <br></br><br></br>
//       <br></br><br></br>
//       <h1>Add New Spirit</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={spirit.name} onChange={handleChange} />
//         </label>
//         <label>
//           Type:
//           <div>
//             <label>
//               <input type="radio" name="type" value="Whiskey" onChange={handleChange} />
//               Whiskey
//             </label>
//             <label>
//               <input type="radio" name="type" value="Vodka" onChange={handleChange} />
//               Vodka
//             </label>
//             <label>
//               <input type="radio" name="type" value="Rum" onChange={handleChange} />
//               Rum
//             </label>
//             {/* Add more radio buttons for other types */}
//           </div>
//         </label>
//         <label>
//           Alcohol Degree:
//           <input type="text" name="alcohol_degree" value={spirit.alcohol_degree} onChange={handleChange} />
//         </label>
//         <label>
//           Price:
//           <input type="text" name="price" value={spirit.price} onChange={handleChange} />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={spirit.description} onChange={handleChange} />
//         </label>
//         <label>
//           Image:
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </label>
//         <button type="submit">Add Spirit</button>
//       </form>
//     </div>
//   );
// }

// export default AddSpiritForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddSpiritForm() {
  const [spirit, setSpirit] = useState({
    name: '',
    type: '',
    alcohol_degree: '',
    price: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', spirit.name);
    formData.append('type', spirit.type);
    formData.append('alcohol_degree', spirit.alcohol_degree);
    formData.append('price', spirit.price);
    formData.append('description', spirit.description);
    formData.append('image', imageFile);

    try {
      const response = await fetch('http://localhost:3001/api/spirits', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Spirit added successfully:', data);
      navigate('/spirits'); // 성공적으로 추가 후 리스트 페이지로 이동
    } catch (error) {
      console.error('Error adding spirit:', error);
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
      <br /><br />
      <br /><br />
      <h1>Add New Spirit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={spirit.name} onChange={handleChange} required />
        </label>
        <label>
          Type:
          <div>
            <label>
              <input type="radio" name="type" value="Whiskey" onChange={handleChange} required />
              Whiskey
            </label>
            <label>
              <input type="radio" name="type" value="Vodka" onChange={handleChange} required />
              Vodka
            </label>
            <label>
              <input type="radio" name="type" value="Rum" onChange={handleChange} required />
              Rum
            </label>
            {/* Add more radio buttons for other types */}
          </div>
        </label>
        <label>
          Alcohol Degree:
          <input type="number" step="0.1" name="alcohol_degree" value={spirit.alcohol_degree} onChange={handleChange} required />
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
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">Add Spirit</button>
      </form>
    </div>
  );
}

export default AddSpiritForm;