import React, { Component } from 'react';
import axios from 'axios';

import TodoList from './TodoList';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './TodoFilter';

/**
 * App component.
 */
class App extends Component {
   state = {
    filter: FILTER_ALL,
    items: []
  };

  /**
   * Make HTTP requests inside component did mount lifecycle method.
   */
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => {
        this.setState({ items: response.data })
      })
  }

  /**
   * Add a new todo to state items.
   *
   * @param {String} title
   */
  addNewTodo = (title) => {
    this.setState(state => {
      const todo = {
        title,
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
          <div className="col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
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
      </div>
    );
  }
}

export default App;
