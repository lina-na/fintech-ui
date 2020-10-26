import React, { createContext } from 'react';

import { UserAuth } from '../custom-types/userAuth';
import useAuthHandler from '../utils/custom-hooks/AuthHandler';
import { DEFAULT_USER_AUTH } from '../utils/const';
import { getStoredUserAuth } from '../utils/helpers';

interface IAuthContextInterface {
  auth: UserAuth;
  setTokenAuth: (userAuth: UserAuth) => void;
  setClearAuth: () => void;
}

export const authContext = createContext<IAuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  setTokenAuth: () => {},
  setClearAuth: () => {},
});

const { Provider } = authContext;

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { auth, setTokenAuth, setClearAuth } = useAuthHandler(
    getStoredUserAuth(),
  );

  return (
    <Provider value={{ auth, setTokenAuth, setClearAuth }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
