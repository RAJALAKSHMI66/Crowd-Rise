import React, { createContext, useState, useContext, useEffect } from "react";


const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    isAdmin: false, 
  });

  const login = (isAdmin) => {
    setAuth({
      isAuthenticated: true,
      isAdmin: isAdmin,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      isAdmin: false,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
