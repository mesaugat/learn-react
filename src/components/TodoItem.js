import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Each todo item.
 *
 * @param {Object} props
 */
class TodoItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    changeTodoStatus: PropTypes.func.isRequired
  }

  handleChange = (event) => this.props.changeTodoStatus(this.props.item.id, event.target.checked);

  render() {
    const { item } = this.props;
    const className = `todo-item ui-state-default ${item.completed === true ? 'completed' : 'pending'}`;

    return (
      <li key={item.id} className={className}>
        <div className="checkbox">
          <label>
            <input type="checkbox" onChange={this.handleChange} checked={item.completed} /> {item.title}
          </label>
        </div>
      </li>
    )
  }
}

export default TodoItem;
