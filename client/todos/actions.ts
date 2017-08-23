import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Todo } from './model';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO
} from './constants/ActionTypes';

const addTodo = createAction<Todo, string>(
  ADD_TODO,
  (text: string) => ({ text, completed: false })
);

const deleteTodo = createAction<Todo, Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
);

const editTodo = createAction<Todo, Todo, string>(
  EDIT_TODO,
  (todo: Todo, newText: string) => <Todo>assign(todo, { text: newText })
);

const completeTodo = createAction<Todo, Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo
)

export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo
}
