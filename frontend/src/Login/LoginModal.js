import React from 'react';
import kakaoImage from '../kakao_login_large_narrow.png';
import './LoginModal.css';

function LoginModal({ onClose }) {

  const handleKakaoLogin = () => {
    window.location.href = '/auth/kakao';
  };

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modallogin-content" onClick={e => e.stopPropagation()}>
        <h2 style ={{ textAlign: 'center' }}>LOGIN</h2>
        <form>
        <button type="button" onClick={handleKakaoLogin}
        style={{ border: 'none', backgroundColor: 'none', padding: '0'}}
        >
        <img src={kakaoImage} alt="카카오" /></button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;