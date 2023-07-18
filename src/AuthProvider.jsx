import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   

    const storedItemJSON = localStorage.getItem('item');

        
        const user = JSON.parse(storedItemJSON);
       
      
  
    
  const authInfo = {

    user
  }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider