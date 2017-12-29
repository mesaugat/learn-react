import React, { Component } from 'react';

import TodoList from './TodoList';

/**
 * App component.
 */
class App extends Component {
   state = {
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
        id: state.length + 1
      };

      return {items: [...state.items, todo]};
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoList items={this.state.items} addNewTodo={this.addNewTodo} />
        </div>
      </div>
    );
  }
}

export default App;
