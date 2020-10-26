import { UserAuth } from '../custom-types/userAuth';
import { DEFAULT_USER_AUTH } from './const';

export const getStoredUserAuth = (): UserAuth => {
  const auth: string | null = window.localStorage.getItem('token');
  let user: UserAuth = DEFAULT_USER_AUTH;

  if (auth) {
    const { isLogged, token } = JSON.parse(auth);
    if (isLogged) {
      user = {
        isLogged,
        token,
      };
    }
  }

  return user;
};
