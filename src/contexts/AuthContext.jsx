import { createContext, useContext, useState } from "react";

const useAuthController = () => {
  const [userData, setUserData] = useState();

  return {
    userData,
    isAuthenticated: !!userData,
    isCheckingAuthStatus: !!userData,
    setUserData
  }
}

export const AuthContext = createContext({
  userData: undefined,
  isAuthenticated: false,
  isCheckingAuthStatus: false,
  setUserData: () => {}
});

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={useAuthController()}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);