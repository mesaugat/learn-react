import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

/**
 * Component to show filtered list of items.
 *
 * @param {Object} props
 */
const FilteredItems = (props) => {
  const { items, changeTodoStatus } = props;

  if (items.length === 0) {
    return (
      <p className="alert alert-info">No items to display.</p>
    );
  }

  return (
    <ul className="list-unstyled">
      {
        items && items.map(item =>
          <TodoItem key={item.id} item={item} changeTodoStatus={changeTodoStatus} />
        )
      }
    </ul>
  )
}

FilteredItems.propTypes = {
  items: PropTypes.array.isRequired,
  changeTodoStatus: PropTypes.func.isRequired
}

export default FilteredItems;
