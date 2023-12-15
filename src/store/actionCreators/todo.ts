import { Dispatch } from 'redux';
import axios from 'axios';
import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  SET_TODO_PAGE,
  TodoAction,
} from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: FETCH_TODOS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        { params: { _page: page, _limit: limit } }
      );
      setTimeout(() => {
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
      }, 500);
    } catch (error) {
      dispatch({
        type: FETCH_TODOS_ERROR,
        payload: 'Помилка під час завантаження списка справ',
      });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return { type: SET_TODO_PAGE, payload: page };
};
