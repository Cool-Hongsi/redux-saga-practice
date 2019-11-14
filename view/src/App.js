import React, { Component } from 'react';
import TodoContainer from './todo/container/TodoContainer';
import GithubContainer from './github/container/GithubContainer';
import RestContainer from './rest/container/RestContainer';

export default class App extends Component{
  render(){
    return(
      <div>
        <TodoContainer /><br/><hr/>
        <GithubContainer /><br/><hr/>
        <RestContainer />
      </div>
    )
  }
}