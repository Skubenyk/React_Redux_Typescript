export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';
export const SET_TODO_PAGE = 'SET_TODO_PAGE';

export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

interface FetchTodosAction {
  type: typeof FETCH_TODOS;
}

interface FetchTodoSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodoErrorAction {
  type: typeof FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPage {
  type: typeof SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | FetchTodosAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPage;
