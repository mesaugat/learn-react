import React from 'react';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

const options = {
  [FILTER_ALL]: 'All',
  [FILTER_ACTIVE]: 'Active',
  [FILTER_COMPLETED]: 'Completed'
};

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

export default TodoFilter;
