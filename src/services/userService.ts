import axios from 'axios';
import {UserLoginForm, UserSignUpForm} from '../interfaces/user'
import { axiosReqTypes } from '../custom-types/userAuth';
import {ClientForm} from "../interfaces/client";

const backend_host = 'http://localhost:8080';

const userService = axios.create({
  baseURL: backend_host,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const timeout = async (ms:number) => new Promise((res) => setTimeout(res, ms));

const request = async (method: axiosReqTypes, api: string, data? :any) => {
  let auth:any = JSON.parse(<string>window.localStorage.getItem('token'));
  if(auth.token) userService.defaults.headers.common['token'] = auth.token;

  let tries = 0;
  while (tries < 3) {
    try {
      return await userService({
        method,
        url: api,
        data,
      });
    } catch (e) {
      switch (e.response.status){
        case '500':
          tries++;
          await timeout(200);
          break;
        case '401':
          window.localStorage.clear();
          break;
        default:
          throw new Error(e.response.data.description);
      }
    }
  }
};

export const doLogin = async (record: UserLoginForm) => {
  try {
    let token = '';
    const response = await request('post', '/api/user/login', record);
    if (response) {
      token = response.data.token;
      userService.defaults.headers.common['token'] = token
      return token;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export const doSignUp = async (record: UserSignUpForm) => {
  try {
    const {firstname, surname , email, password} = record;

    return  await request('post', '/api/user/signup', {firstname, surname, email, password})
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createClient = async (record: ClientForm) => {
  try {
    return await request('post', '/api/client/', record);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getClients = async () => {
  try {
    return await request('get', '/api/client/');
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteClient = async (id: string) => {
  try {
    return await request('delete', `/api/client/${id}`)
  } catch (err) {
    throw new Error(err.message);
  }
}