import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.defaultProps = {
  addTodoProps: () => {},
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

export default InputTodo;
