import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Login from "./containers/login/Login";
import SignUp from "./containers/sign-up/SignUp";
import Home from "./containers/home/Home";
import Dashboard from "./containers/dashboard/Dashboard";

const App: React.FC = () => {
  return (
   <AuthContextProvider>
     <BrowserRouter>
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/login' component={Login} />
         <Route path='/signup' component={SignUp} />
         <Route path='/dashboard' component={Dashboard} />
       </Switch>
     </BrowserRouter>
   </AuthContextProvider>
  )
}


export default App;
