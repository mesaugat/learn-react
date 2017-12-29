import React from 'react';
import TodoList from './TodoList.js';

/**
 * App component.
 */
const App = () => {
  const items = [
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
  ];

  return (
    <div className="container">
      <div className="row">
        <TodoList items={items} />
      </div>
    </div>
  );
}

export default App;
