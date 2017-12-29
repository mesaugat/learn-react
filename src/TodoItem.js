import React from 'react';

/**
 * Each todo item.
 *
 * @param {Object} props
 */
const TodoItem = (props) => {
  const { item } = props;

  return (
    <li key={item.id} className="ui-state-default">
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={item.completed}/>{item.text}
        </label>
      </div>
    </li>
  )
}

export default TodoItem;
