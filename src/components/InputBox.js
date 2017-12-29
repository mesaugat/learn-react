import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Input component to add a new todo.
 */
class InputBox extends Component {
  propTypes = {
    items: PropTypes.array,
    addNewTodo: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  /**
   * Set input text value on change event.
   */
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  /**
   * Add a note when 'Enter' key is pressed.
   */
  handleKeyUp = (event) => {
    const value = event.target.value;

    if (event.keyCode === 13 && value) {
      this.props.addNewTodo(value);

      this.setState({value: ''});
    }
  }

  render() {
    return (
      <input type="text"
        value={this.state.value}
        className="form-control add-todo"
        placeholder="Add new todo"
        onKeyUp={this.handleKeyUp}
        onChange={this.handleChange}
      />
    )
  }
}

export default InputBox;
