import React from 'react';
import TodoItem from './TodoItem';
import TodoCount from './TodoCount';

/**
 * Component to show list of todos.
 *
 * @param {Object} props
 */
const TodoList = (props) => {
  const {items} = props;
  const count = items.length;

  return (
    <div className="todolist">
      <h1>Todos</h1>
      <ul className="list-unstyled">
        {
          items && items.map(item =>
            <TodoItem key={item.id} item={item} />
          )
        }
      </ul>
      <TodoCount count={count} />
    </div>
  )
}

export default TodoList;
