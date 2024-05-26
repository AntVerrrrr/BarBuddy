import React, { useState } from 'react';
import './LoginModal.css';

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleKakaoLogin = () => {
    window.location.href = '/auth/kakao';
  };

  const handleLocalLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('로그인 요청에 실패했습니다.');
      }

      const data = await response.json();
      const { token } = data.response;
      localStorage.setItem('token', token);

      setIsLogged(true);
      onClose();
    } catch (error) {
      console.error('로그인 중 에러 발생:', error);
    }
  };

  const handleSignup = () => {
    setIsSignupModalOpen(true);
  };

  const handleSignupModalClose = () => {
    setIsSignupModalOpen(false);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: signupEmail, password: signupPassword }),
      });

      if (!response.ok) {
        throw new Error('회원가입에 실패했습니다.');
      }

      setIsSignupModalOpen(false);
    } catch (error) {
      console.error('회원가입 중 에러 발생:', error);
    }
  };

  return (
    <>
      <div className="modal-background" onClick={onClose}>
        <div className="modallogin-content" onClick={(e) => e.stopPropagation()}>
          <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={handleLocalLogin}>Local Login</button>
            <button type="button" onClick={handleSignup} style={{ marginTop: '10px', backgroundColor: 'green' }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {isSignupModalOpen && (
        <div className="modal-background" onClick={handleSignupModalClose}>
          <div className="modallogin-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ textAlign: 'center' }}>SIGN UP</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
              <button type="submit" style={{ marginTop: '10px', backgroundColor: 'green' }}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
