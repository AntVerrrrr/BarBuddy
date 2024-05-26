import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Carousel';
import Navbar from './Components/Navbar.js';
import SpiritList from './Components/Spirit/SpiritList';
import AddSpiritForm from './Components/Spirit/AddSpiritForm';
import SpiritDetails from './Components/Spirit/SpiritDetails';
import EditSpiritForm from './Components/Spirit/EditSpiritForm';

import CocktailList from './Components/Cocktail/CocktailList';
import AddCocktailForm from './Components/Cocktail/AddCocktailForm';
import CocktailDetails from './Components/Cocktail/CocktailDetails';
import EditCocktailForm from './Components/Cocktail/EditCocktailForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/spirits" element={<SpiritList />} />
          <Route path="/spirits/add" element={<AddSpiritForm />} />
          <Route path="/spirits/:id" element={<SpiritDetails />} />
          <Route path="/spirits/:id/edit" element={<EditSpiritForm />} />
          
          <Route path="/cocktails" element={<CocktailList />} />
          <Route path="/cocktails/add" element={<AddCocktailForm />} />
          <Route path="/cocktails/:id" element={<CocktailDetails />} />
          <Route path="/cocktails/:id/edit" element={<EditCocktailForm />} />
          <Route path="/bars" element={<div>Bars</div>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
