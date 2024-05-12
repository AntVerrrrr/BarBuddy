import React, { useState } from 'react';
import kakaoImage from '../kakao_login_large_narrow.png';
import './LoginModal.css';

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleKakaoLogin = () => {
    window.location.href = '/auth/kakao';
  };

  const handleLocalLogin = () => {
    // 로컬 로그인 로직을 여기에 구현해주세요.
    console.log('Email:', email);
    console.log('Password:', password);
    // 로그인 성공 후 다른 작업 수행 가능
  };

  const handleSignup = () => {
    // 회원가입 모달을 열기 위한 상태를 변경합니다.
    setIsSignupModalOpen(true);
  };

  const handleSignupModalClose = () => {
    // 회원가입 모달을 닫기 위한 상태를 변경합니다.
    setIsSignupModalOpen(false);
  };

  const handleSignupSubmit = () => {
    // 회원가입 처리 로직을 추가할 수 있습니다.
    console.log('회원가입 정보:', email, password);
    // 백엔드로 회원가입 요청을 보내고 응답을 처리합니다.
    // 회원가입이 성공하면 모달을 닫거나 다른 작업을 수행할 수 있습니다.
    // 실패하면 사용자에게 오류 메시지를 표시할 수 있습니다.
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
            <button type="button" onClick={handleKakaoLogin} style={{ border: 'none', backgroundColor: 'none', padding: '0' }}>
              <img src={kakaoImage} alt="카카오" />
            </button>
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
