import { createContext } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
  const contextData = {
    
  }
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}