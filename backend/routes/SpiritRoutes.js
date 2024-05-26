const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/mysqlConnection');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/spirits/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Spirit List (GET)
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT id, name, type, alcohol_degree, image_path FROM spirits', (err, rows) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error fetching spirits' });
    }
  });
});

// Spirit Details (GET)
router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM spirits WHERE id = ?', [id], (err, rows) => {
    if (!err && rows.length > 0) {
      res.status(200).json(rows[0]);
    } else if (rows.length === 0) {
      res.status(404).json({ error: 'Spirit not found' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error fetching spirit details' });
    }
  });
});

// Add Spirit (POST)
router.post('/', upload.single('image'), (req, res) => {
  const { name, type, alcohol_degree, price, description } = req.body;
  const imagePath = req.file ? `/uploads/spirits/${req.file.filename}` : null;

  mysqlConnection.query(
    'INSERT INTO spirits (name, type, alcohol_degree, price, description, image_path) VALUES (?, ?, ?, ?, ?, ?)',
    [name, type, alcohol_degree, price, description, imagePath],
    (err, result) => {
      if (!err) {
        res.status(201).json({ message: 'Spirit added successfully', id: result.insertId });
      } else {
        console.error(err);
        res.status(500).json({ error: 'Error adding spirit' });
      }
    }
  );
});

// Update Spirit (PUT)
// router.put('/:id', upload.single('image'), (req, res) => {
//   const { id } = req.params;
//   const { name, type, alcohol_degree, price, description } = req.body;
//   const imagePath = req.file ? `/uploads/spirits/${req.file.filename}` : req.body.image_path;

//   mysqlConnection.query(
//     'UPDATE spirits SET name = ?, type = ?, alcohol_degree = ?, price = ?, description = ?, image_path = ? WHERE id = ?',
//     [name, type, alcohol_degree, price, description, imagePath, id],
//     (err, result) => {
//       if (!err && result.affectedRows > 0) {
//         res.status(200).json({ message: 'Spirit updated successfully' });
//       } else if (result.affectedRows === 0) {
//         res.status(404).json({ error: 'Spirit not found' });
//       } else {
//         console.error(err);
//         res.status(500).json({ error: 'Error updating spirit' });
//       }
//     }
//   );
// });

// Update Spirit (PUT)
router.put('/:id', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { name, type, alcohol_degree, price, description } = req.body;
  const imagePath = req.file ? `/uploads/spirits/${req.file.filename}` : req.body.image_path;

  mysqlConnection.query(
    'UPDATE spirits SET name = ?, type = ?, alcohol_degree = ?, price = ?, description = ?, image_path = ? WHERE id = ?',
    [name, type, alcohol_degree, price, description, imagePath, id],
    (err, result) => {
      if (!err && result.affectedRows > 0) {
        res.status(200).json({ message: 'Spirit updated successfully' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Spirit not found' });
      } else {
        console.error(err);
        res.status(500).json({ error: 'Error updating spirit' });
      }
    }
  );
});

// Delete Spirit (DELETE)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM spirits WHERE id = ?', [id], (err, result) => {
    if (!err && result.affectedRows > 0) {
      res.status(200).json({ message: 'Spirit deleted successfully' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Spirit not found' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error deleting spirit' });
    }
  });
});


// 특정 이름을 가진 spirit을 반환하는 엔드포인트 추가
router.get('/byName/:name', (req, res) => {
  const { name } = req.params;
  mysqlConnection.query(
    'SELECT * FROM spirits WHERE name = ?',
    [name],
    (err, rows) => {
      if (!err) {
        res.status(200).json(rows[0]); // Assuming name is unique, returning the first match
      } else {
        console.error(err);
        res.status(500).json({ error: 'Error fetching spirit' });
      }
    }
  );
});


module.exports = router;
