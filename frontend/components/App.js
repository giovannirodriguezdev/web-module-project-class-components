import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'BBQ Dinner',
          id: 1528817084358,
          completed: false
        }
      ],
      hasCompletedTodos: true
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.toggleShowCompleted = this.toggleShowCompleted.bind(this);
  }

  addTodo(newTodoName) {
    const newTodo = {
      name: newTodoName,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  }

  toggleComplete(todoId) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  }

  toggleShowCompleted() {
    this.setState(prevState => ({
      showCompleted: !prevState.showCompleted
    }));
  }

  render() {
    const filteredTodos = this.state.showCompleted
      ? this.state.todos 
      : this.state.todos.filter(todo => !todo.completed);

    const clearButtonText = this.state.showCompleted ? 'Hide Completed' : 'Show Completed';

    return (
      <div>
        <h1>Todo App</h1>
        <h2>Todos:</h2>
        <TodoList 
          todos={filteredTodos} 
          toggleComplete={this.toggleComplete} 
        />
        <Form 
          addTodo={this.addTodo} 
          toggleShowCompleted={this.toggleShowCompleted}
          clearButtonText={clearButtonText}
        />
      </div>
    );
  }
}
