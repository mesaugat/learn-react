import React from 'react';

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
            <li key={item.id} className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" checked={item.completed}/>{item.text}
                </label>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default TodoList;
