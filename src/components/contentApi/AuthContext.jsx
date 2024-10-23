import React, { createContext, useState, useContext } from 'react';
import LoginPopup from '../groupComponent/LoginPopup';

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const openAuthPopup = () => setIsAuthPopupOpen(true);
  const closeAuthPopup = () => setIsAuthPopupOpen(false);

  return (
    <AuthContext.Provider value={{ isAuthPopupOpen, openAuthPopup, closeAuthPopup }}>
      {children}
      {isAuthPopupOpen && <LoginPopup open={isAuthPopupOpen} setOpen={closeAuthPopup} />}
    </AuthContext.Provider>
  );
};
