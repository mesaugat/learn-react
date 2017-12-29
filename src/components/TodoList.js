import React from 'react';
import PropTypes from 'prop-types';

import InputBox from './InputBox';
import TodoItem from './TodoItem';
import TodoCount from './TodoCount';

/**
 * Component to show list of todos.
 *
 * @param {Object} props
 */
const TodoList = (props) => {
  const { items } = props;
  const count = items.length;

  return (
    <div className="todolist">
      <h1>Todos</h1>
      <InputBox {...props} />
      <ul className="list-unstyled">
        {
          items && items.map(item =>
            <TodoItem key={item.id} item={item} changeTodoStatus={props.changeTodoStatus} />
          )
        }
      </ul>
      <TodoCount count={count} />
    </div>
  )
}

TodoList.propTypes = {
  items: PropTypes.array
}

export default TodoList;
