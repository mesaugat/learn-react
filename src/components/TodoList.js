import React from 'react';
import PropTypes from 'prop-types';

import InputBox from './InputBox';
import TodoCount from './TodoCount';
import TodoFilter from './TodoFilter';
import FilteredItems from './FilteredItems';

/**
 * Component to show list of todos.
 *
 * @param {Object} props
 */
const TodoList = (props) => {
  const { filter, addNewTodo, filterTodos, changeFilter, changeTodoStatus } = props;

  const items = filterTodos(filter);
  const count = items.length;

  return (
    <div className="todolist">
      <h1>My Todo List</h1>
      <InputBox {...{addNewTodo}} />
      <FilteredItems {...{items, changeTodoStatus}} />
      <footer className="clearfix">
        <TodoCount count={count} />
        <div className="pull-right">
          <TodoFilter {...{filter, changeFilter}} />
        </div>
      </footer>
    </div>
  )
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  filterTodos: PropTypes.func.isRequired,
  changeTodoStatus: PropTypes.func.isRequired
}

export default TodoList;
