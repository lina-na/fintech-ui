import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import Login from "./containers/login/Login";

const App: React.FC = () => {
  return (
   <AuthContextProvider>
      <Login/>
   </AuthContextProvider>
  )
}


export default App;
