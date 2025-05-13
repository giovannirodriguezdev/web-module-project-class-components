import React from 'react'

export default class Todo extends React.Component {
  handleToggle = () => {
    this.props.toggleComplete(this.props.todo.id);
  };

  render() {
    const { todo } = this.props;
    return (
      <div onClick={this.handleToggle} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.name}
          {todo.completed && <span style={{ marginLeft: '5px' }}>&#10004;</span>}
        </span>
      </div>
    )
  }
}
