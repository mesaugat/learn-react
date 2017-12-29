import React from 'react';

/**
 * Component to display number of todos.
 *
 * @param {Object} props
 */
const TodoCount = (props) => {
  const {count} = props;

  return (
    <div className="todo-footer">
      <strong>
        <span className="count-todos">{count}</span>
      </strong>
      {count === 1 ? ' item' : ' items'}
    </div>
  );
}

export default TodoCount;
