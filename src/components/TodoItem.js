import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const {
      todo,
      handleChangeProps,
      deleteTodoProps,
      setUpdate,
    } = this.props;

    const { id, title, completed } = todo;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: () => {},
  deleteTodoProps: () => {},
  setUpdate: () => {},
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: () => {},
};

export default TodoItem;
