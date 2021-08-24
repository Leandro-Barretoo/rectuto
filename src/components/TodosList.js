import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.defaultProps = {
  todos: [],
  handleChangeProps: () => {},
  deleteTodoProps: () => {},
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

export default TodosList;
