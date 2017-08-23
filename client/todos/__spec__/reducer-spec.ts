/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import reducer from '../reducer';
import { Todo } from '../model';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO
} from '../constants/ActionTypes';

describe('todo reducer', () => {
  it('handles add', () => {
    let state: Todo[] = [{ id: 0, text: '', completed: true }];

    state = reducer(state, {
      type: ADD_TODO,
      payload: { text: 'hello', completed: false }
    });

    expect(state[0]).to.eql(
      { id: 1, text: 'hello', completed: false }
    );
  });

  it('handles delete', () => {
    let state: Todo[] = [{ id: 1, text: '', completed: false }];

    state = reducer(state, {
      type: DELETE_TODO,
      payload: { id: 1 } as Todo
    });

    expect(state).to.eql([]);
  });

  it('handles edit', () => {
    let state: Todo[] = [{ id: 1, text: '', completed: false }];

    state = reducer(state, {
      type: EDIT_TODO,
      payload: { id: 1, text: 'hello' } as Todo
    });

    expect(state[0]).to.eql(
      { id: 1, text: 'hello', completed: false }
    );
  });
});
