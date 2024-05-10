const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');  // JWT 라이브러리 불러오기

// 앱 초기화
const app = express();
const PORT = 3000;

// CORS 설정
const corsOptions = {
  origin: 'http://localhost:3001', // 허용할 프론트엔드 도메인
  optionsSuccessStatus: 200 // 일부 레거시 브라우저 호환을 위한 설정
};
app.use(cors(corsOptions));

// JSON 요청 본문 파싱을 위한 설정
app.use(bodyParser.json());

// 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // MySQL 사용자 이름
  password: 'jhs20191157!',  // MySQL 비밀번호
  database: 'BarBuddy'  // 데이터베이스 이름
});

db.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + db.threadId);
});

app.post('/signup', async (req, res) => {
  const { username, nickname, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, nickname, password, email) VALUES (?, ?, ?, ?)', [username, nickname, hashedPassword, email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send({ message: 'User registered', userId: result.insertId });
  });
});
  
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
          return res.status(500).send(err);
      }
      if (results.length > 0 && await bcrypt.compare(password, results[0].password)) {
          const token = jwt.sign({ id: results[0].id }, 'yourSecretKey', { expiresIn: '1h' });
          res.status(200).send({ message: 'Logged in successfully', token });
      } else {
          res.status(401).send({ message: 'Invalid credentials' });
      }
  });
});


// 사용자 프로필 업데이트 API
app.post('/update-profile', (req, res) => {
  const { id, nickname, email, profile_image } = req.body;
  const query = 'UPDATE users SET nickname = ?, email = ?, profile_image = ? WHERE id = ?';
  db.query(query, [nickname, email, profile_image || 'default_profile_image.png', id], (error, results) => {
    if (error) {
      res.status(500).send('Error updating user: ' + error.sqlMessage);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.status(200).send('Profile updated successfully');
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
