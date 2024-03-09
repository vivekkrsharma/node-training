import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function User(props) {
  const {id, name, age} = props.user;
  return <li>Id: {id} name is: {name} and Age: {age}</li>;
}


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => {
        console.log(response);
        return response.json();
        // return response;
      })
      .then(data => {
        setUsers(data);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          {users && users.map((user) => <User key={user.id} user={user} />)}
        </ul>
      </header>
    </div>
  );
}

export default App;