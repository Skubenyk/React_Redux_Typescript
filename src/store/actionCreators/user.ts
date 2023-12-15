import { Dispatch } from 'redux';
import {
  UserAction,
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from './../../types/user';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: FETCH_USERS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setTimeout(() => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
      }, 500);
    } catch (error) {
      dispatch({
        type: FETCH_USERS_ERROR,
        payload: 'Помилка під час завантаження користувачів',
      });
    }
  };
};
