// // backend/routes/CocktailRoutes.js

// const express = require('express');
// const router = express.Router();
// const mysqlConnection = require('../config/mysqlConnection');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/cocktails/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // Cocktail List (GET)
// router.get('/', (req, res) => {
//   mysqlConnection.query('SELECT id, name, base_spirits, image_path FROM cocktails', (err, rows) => {
//     if (!err) {
//       res.status(200).json(rows);
//     } else {
//       console.error(err);
//       res.status(500).json({ error: 'Error fetching cocktails' });
//     }
//   });
// });

// // Cocktail Details (GET)
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   mysqlConnection.query('SELECT * FROM cocktails WHERE id = ?', [id], (err, rows) => {
//     if (!err && rows.length > 0) {
//       res.status(200).json(rows[0]);
//     } else if (rows.length === 0) {
//       res.status(404).json({ error: 'Cocktail not found' });
//     } else {
//       console.error(err);
//       res.status(500).json({ error: 'Error fetching cocktail details' });
//     }
//   });
// });

// // Add Cocktail (POST)
// router.post('/', upload.single('image'), (req, res) => {
//   const { name, base_spirit, category, garnish, glass_type, instructions, description, alcohol_degree, ingredients } = req.body;
//   const imagePath = req.file ? `/uploads/cocktails/${req.file.filename}` : null;

//   mysqlConnection.query(
//     'INSERT INTO cocktails (name, base_spirits, category, garnish, glass_type, instructions, description, alcohol_degree, ingredients, image_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//     [name, base_spirit, category, garnish, glass_type, instructions, description, alcohol_degree, ingredients, imagePath],
//     (err, result) => {
//       if (!err) {
//         res.status(201).json({ message: 'Cocktail added successfully', id: result.insertId });
//       } else {
//         console.error(err);
//         res.status(500).json({ error: 'Error adding cocktail' });
//       }
//     }
//   );
// });

// // Update Cocktail (PUT)
// router.put('/:id', upload.single('image'), (req, res) => {
//   const { id } = req.params;
//   const { name, base_spirit, category, garnish, glass_type, instructions, description, alcohol_degree, ingredients } = req.body;
//   const imagePath = req.file ? `/uploads/cocktails/${req.file.filename}` : req.body.image_path;

//   mysqlConnection.query(
//     'UPDATE cocktails SET name = ?, base_spirit = ?, category = ?, garnish = ?, glass_type = ?, instructions = ?, description = ?, alcohol_degree = ?, ingredients = ?, image_path = ? WHERE id = ?',
//     [name, base_spirit, category, garnish, glass_type, instructions, description, alcohol_degree, ingredients, imagePath, id],
//     (err, result) => {
//       if (!err && result.affectedRows > 0) {
//         res.status(200).json({ message: 'Cocktail updated successfully' });
//       } else if (result.affectedRows === 0) {
//         res.status(404).json({ error: 'Cocktail not found' });
//       } else {
//         console.error(err);
//         res.status(500).json({ error: 'Error updating cocktail' });
//       }
//     }
//   );
// });

// // Delete Cocktail (DELETE)
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   mysqlConnection.query('DELETE FROM cocktails WHERE id = ?', [id], (err, result) => {
//     if (!err && result.affectedRows > 0) {
//       res.status(200).json({ message: 'Cocktail deleted successfully' });
//     } else if (result.affectedRows === 0) {
//       res.status(404).json({ error: 'Cocktail not found' });
//     } else {
//       console.error(err);
//       res.status(500).json({ error: 'Error deleting cocktail' });
//     }
//   });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/mysqlConnection');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/cocktails/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Cocktail List (GET)
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT id, name, base_spirits, image_path FROM cocktails', (err, rows) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error fetching cocktails' });
    }
  });
});

// Cocktail Details (GET)
router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM cocktails WHERE id = ?', [id], (err, rows) => {
    if (!err && rows.length > 0) {
      res.status(200).json(rows[0]);
    } else if (rows.length === 0) {
      res.status(404).json({ error: 'Cocktail not found' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error fetching cocktail details' });
    }
  });
});

// Add Cocktail (POST)
router.post('/', upload.single('image'), (req, res) => {
  const { name, baseSpirits, category, garnish, glassType, instructions, description, alcoholDegree, ingredients } = req.body;
  const imagePath = req.file ? `/uploads/cocktails/${req.file.filename}` : null;

  mysqlConnection.query(
    'INSERT INTO cocktails (name, base_spirits, category, garnish, glass_type, instructions, description, alcohol_degree, ingredients, image_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [name, baseSpirits, category, garnish, glassType, instructions, description, alcoholDegree, ingredients, imagePath],
    (err, result) => {
      if (!err) {
        res.status(201).json({ message: 'Cocktail added successfully', id: result.insertId });
      } else {
        console.error(err);
        res.status(500).json({ error: 'Error adding cocktail' });
      }
    }
  );
});

// Update Cocktail (PUT)
router.put('/:id', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { name, baseSpirits, category, garnish, glassType, instructions, description, alcoholDegree, ingredients } = req.body;
  const imagePath = req.file ? `/uploads/cocktails/${req.file.filename}` : req.body.image_path;

  mysqlConnection.query(
    'UPDATE cocktails SET name = ?, base_spirits = ?, category = ?, garnish = ?, glass_type = ?, instructions = ?, description = ?, alcohol_degree = ?, ingredients = ?, image_path = ? WHERE id = ?',
    [name, baseSpirits, category, garnish, glassType, instructions, description, alcoholDegree, ingredients, imagePath, id],
    (err, result) => {
      if (!err && result.affectedRows > 0) {
        res.status(200).json({ message: 'Cocktail updated successfully' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Cocktail not found' });
      } else {
        console.error(err);
        res.status(500).json({ error: 'Error updating cocktail' });
      }
    }
  );
});

// Delete Cocktail (DELETE)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM cocktails WHERE id = ?', [id], (err, result) => {
    if (!err && result.affectedRows > 0) {
      res.status(200).json({ message: 'Cocktail deleted successfully' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Cocktail not found' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error deleting cocktail' });
    }
  });
});


// 특정 베이스 술을 사용하는 칵테일 목록을 반환하는 엔드포인트 추가
router.get('/byBaseSpirit/:baseSpirit', (req, res) => {
  const { baseSpirit } = req.params;
  mysqlConnection.query(
    'SELECT * FROM cocktails WHERE JSON_CONTAINS(base_spirits, JSON_QUOTE(?), "$")',
    [baseSpirit],
    (err, rows) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.error(err);
        res.status(500).json({ error: 'Error fetching cocktails' });
      }
    }
  );
});



module.exports = router;