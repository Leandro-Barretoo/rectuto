import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      todos,
      handleChangeProps,
      deleteTodoProps,
      setUpdate,
    } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
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
  setUpdate: () => {},
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
