// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = sessionStorage.getItem('token');
    return token ? { token } : null; // 초기 상태 설정
  });

  const login = (token) => {
    sessionStorage.setItem('token', token); // 토큰을 sessionStorage에 저장
    setUser({ token });
  };

  const logout = () => {
    sessionStorage.removeItem('token'); // sessionStorage에서 토큰 삭제
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
