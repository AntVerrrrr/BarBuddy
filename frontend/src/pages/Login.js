import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Logging in with email', email, password);

    try {
      // 백엔드 서버로 POST 요청을 보내 로그인 실행
      const response = await axios.post('http://localhost:3000/login', {
        email,  // 이메일 사용
        password
      });
      console.log('Login successful', response.data);
      // 로그인 성공 후 홈페이지로 리디렉트
      navigate('/'); // 로그인 후 사용자를 홈페이지로 리디렉션
    } catch (error) {
      console.error('Login failed', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
