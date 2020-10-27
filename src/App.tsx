import React from 'react';
import AuthContextProvider from './contexts/AuthContext';

import RootContainer from './containers/RootContainers';

const App: React.FC = () => {
  return (
   <AuthContextProvider>
     <RootContainer/>
   </AuthContextProvider>
  )
}


export default App;
