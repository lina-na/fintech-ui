import { useState } from 'react';
import { UserAuth } from '../../custom-types/userAuth';
import { DEFAULT_USER_AUTH } from '../const';

const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = useState(initialState);

  const setTokenAuth = (userAuth: UserAuth) => {
    window.localStorage.setItem('token', JSON.stringify(userAuth));
    setAuth(userAuth);
  };

  const setClearAuth = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };

  return {
    auth,
    setTokenAuth,
    setClearAuth,
  };
};

export default useAuthHandler;
