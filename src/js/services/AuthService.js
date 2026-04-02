import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { buildHeaders } from '../helpers/AppHelper';

export const login = (args) => {
  return axios.post(
    `${API_BASE_URL}/login`,
    {
      email: args.email,
      password: args.password
    },
    {
      headers: buildHeaders()
    },
  )
}

export const createSession = (args) => {
  // Store the token
  localStorage.setItem(TOKEN_BEARER, args.token);
}

export const destroySession = () => {
  localStorage.removeItem(TOKEN_BEARER);
}

export const logoutAndRedirect = () => {
  destroySession();
  window.location.replace(`${window.location.pathname}${window.location.search}#/`);
}

export const isLoggedIn = () => {
  return getCurrentUser() != false;
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_BEARER);
}

export const getCurrentUser = () => {
  const token = getToken();

  if (!token) {
    return false;
  }

  try {
    const currentUser = jwtDecode(token);

    if (currentUser.exp && currentUser.exp * 1000 <= Date.now()) {
      destroySession();
      return false;
    }

    return currentUser;
  } catch (error) {
    destroySession();
    return false;
  }
}
