export interface UserLoginForm {
  email: string;
  password: string;
}

export interface UserSignUpForm {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type UserAuth = {
  isLogged: boolean,
  token: string;
};