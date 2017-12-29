import React from 'react';
import PropTypes from 'prop-types';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

const options = {
  [FILTER_ALL]: 'All',
  [FILTER_ACTIVE]: 'Active',
  [FILTER_COMPLETED]: 'Completed'
};

/**
 * Component to filter list of todos by it's status.
 *
 * @param {Object} props
 */
const TodoFilter = (props) => {
  const { filter, changeFilter } = props;
  const className = (key) => (key === filter ? 'selected' : '');

  return (
    <ul className="filters list-unstyled clearfix">
      {Object.keys(options).map(key => (
        <li key={key}>
          <a onClick={() => changeFilter(key)} className={className(key)}>
            {options[key]}
          </a>
        </li>
      ))}
    </ul>
  )
}

TodoFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired
}

export default TodoFilter;
