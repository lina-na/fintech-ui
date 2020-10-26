import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import Login from "./containers/login/Login";
import { Route, Switch, BrowserRouter} from 'react-router-dom'

const App: React.FC = () => {
  return (
   <AuthContextProvider>
     <BrowserRouter>
       <Switch>
         <Route path='/login' component={Login} />
         {/*<Route path='/signup' component={SignUp} />*/}
       </Switch>
     </BrowserRouter>
   </AuthContextProvider>
  )
}


export default App;
