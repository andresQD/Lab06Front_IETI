  
import React, { Component } from 'react';
import './App.css';
import UserList from './UserList'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
    };

  }

  componentDidMount() {
    fetch('http://ietibackend.westus.azurecontainer.io:8080/user')
      .then(response => response.json())
      .then(data => {
        let userList = [];
        data.forEach(function (user) {
          userList.push({
            user
          })
        });
        this.setState({ usersList: userList });
      });
  }

  render() {
    return (
      <div >
        <UserList usersList={this.state.usersList} />
      </div>
    );
  }
}

export default App;