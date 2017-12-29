import React from 'react';
import TodoItem from './TodoItem';

/**
 * Component to show list of todos.
 *
 * @param {Object} props
 */
const TodoList = (props) => {
  const {items} = props

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
    </div>
  )
}

export default TodoList;
