import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState(''); 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Signing up', username, email, password);

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        username,
        nickname,
        password,
        email
      });
      console.log('Signup Success', response.data);
      navigate('/');
    } catch (error) {
      if (error.response) {
        // 서버 응답이 있는 경우, 에러 메시지 처리
        console.error('Signup Error', error.response.data);
      } else {
        // 서버 응답이 없는 경우, 예를 들어 서버 다운 등
        console.error('Signup Error', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Nickname: {/* nickname 입력 필드 */}
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
