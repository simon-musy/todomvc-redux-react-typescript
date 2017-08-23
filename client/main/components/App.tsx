import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Header,
  MainSection,
  model,
  addTodo,
  editTodo,
  completeTodo,
  deleteTodo
} from '../../todos';

interface AppProps {
  todos: model.Todo[];
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <div>
        <Header addTodo={(text: string) => dispatch(addTodo(text))} />
        <MainSection
            todos={todos}
            editTodo={(t,s) => dispatch(editTodo(t, s))}
            deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
            completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
