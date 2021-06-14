import React, {Component, Fragment} from 'react';
import {Text, View} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
class TodoList extends Component {
  renderTodoList = () => (
    <ul>
      {this.props.todos.allTodoes.map(todo => (
        <li key={todo.id}> {todo.text} </li>
      ))}
    </ul>
  );

  render() {
    console.log(this.props);

    const {todos} = this.props;
    return (
      <Fragment>
        {todos.loading ? <Text>Carregando...</Text> : this.renderTodoList()}
      </Fragment>
    );
  }
}

const TodosQuery = gql`
  query {
    allTodoes {
      id
      text
    }
  }
`;

export default graphql(TodosQuery, {name: 'todos'})(TodoList);
