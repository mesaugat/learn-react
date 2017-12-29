import React, { Component } from 'react';

import TodoList from './TodoList';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './TodoFilter';

/**
 * App component.
 */
class App extends Component {
   state = {
    filter: FILTER_ALL,
    items: [
      {
        id: 1,
        text: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        text: 'Buy bread',
        completed: false
      },
      {
        id: 3,
        text: 'Teach penguins to fly',
        completed: true
      }
    ]
  };

  /**
   * Add a new todo to state items.
   *
   * @param {String} text
   */
  addNewTodo = (text) => {
    this.setState(state => {
      const todo = {
        text,
        completed: false,
        id: state.items.length + 1
      };

      return { items: [...state.items, todo] };
    })
  }

  /**
   * Change todo completion status.
   *
   * @param {Number} todoId
   * @param {Boolean} completed
   */
  changeTodoStatus = (todoId, completed) => {
    this.setState(state => {
      const items = state.items.map(item => {
        if (item.id !== todoId) {
          return item;
        }

        return { ...item, completed };
      })

      return { items };
    })
  }

  /**
   * Filter todos by completion status.
   *
   * @param {String} status
   * @returns {Object}
   */
  filterTodos = (status) => {
    const { items } = this.state;

    switch (status) {
      case FILTER_COMPLETED:
        return items.filter(item => item.completed === true);

      case FILTER_ACTIVE:
        return items.filter(item => item.completed !== true);

      default:
        return items;
    }
  }

  /**
   * Change filter by status.
   *
   * @param {String} status
   */
  changeFilter = (status) => {
    this.setState({ filter: status });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoList
            items={this.state.items}
            filter={this.state.filter}
            addNewTodo={this.addNewTodo}
            filterTodos={this.filterTodos}
            changeFilter={this.changeFilter}
            changeTodoStatus={this.changeTodoStatus}
          />
        </div>
      </div>
    );
  }
}

export default App;
