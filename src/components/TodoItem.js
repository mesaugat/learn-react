import React from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  item: PropTypes.object
}

export default TodoItem;
