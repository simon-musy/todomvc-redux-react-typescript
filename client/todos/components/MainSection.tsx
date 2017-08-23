import * as React from 'react';

import { Todo } from '../model';
import TodoItem from './TodoItem';

interface MainSectionProps {
  todos: Todo[];
  editTodo: (todo:Todo, text:string)=>void;
  completeTodo: (todo:Todo)=>void;
  deleteTodo: (todo:Todo)=>void;
};

class MainSection extends React.Component<MainSectionProps, object> {
  constructor(props, context) {
    super(props, context);
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  render() {
    const { todos, completeTodo, deleteTodo, editTodo } = this.props;

    return (
      <section>
        <ul>
          {todos.map(todo =>
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
