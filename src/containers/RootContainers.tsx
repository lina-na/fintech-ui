import React, { lazy, Suspense, useContext }  from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { authContext } from '../contexts/AuthContext';

import Loading from '../components/Loading/Loading';

const Login = lazy(() => import('./login/Login'));
const SignUp = lazy(() => import('./sign-up/SignUp'));
const Home = lazy(() => import('./home/Home'));
const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const RootContainer: React.FC = () => {

    const { auth } = useContext(authContext)
    console.log(auth);
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}


export default RootContainer;
