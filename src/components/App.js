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

  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoList items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
