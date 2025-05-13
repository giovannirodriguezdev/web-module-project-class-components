import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputValue.trim()) {
      this.props.addTodo(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder="Type Todo:"
        />
        <button type="submit">Submit</button><br/>
        <button type="button" onClick={this.props.toggleShowCompleted} className='toggleBtn'>
          {this.props.clearButtonText}
        </button>
      </form>
    );
  }
}
