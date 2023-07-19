import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   
const [loading,setLoading]=useState(false)
    const storedItemJSON = localStorage.getItem('ownerInfo');

        
        const user = JSON.parse(storedItemJSON);
        
        // console.log(user)
        // if(user){
        //     fetch(`https://localhost:5000/jwt`,{
        //       method:'POST',
        //       headers:{
        //         'content-type': 'application/json'
        //       },
        //       body:JSON.stringify({email: user?.email })
            
        //     }).then(res=>res.json())
        //     .then(data=>{
        //       localStorage.setItem('access-token', data.token)
        //       setLoading(false)
        //       console.log(data)
        //     })
        //    }
        //    else {
        //     localStorage.removeItem('access-token')
        //     setLoading(false)
        //    }
       
      
  
    
  const authInfo = {

    user
  }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider