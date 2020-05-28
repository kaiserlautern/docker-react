import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker'
import ApprovalCard from './ApprovalCard'
import 'font-awesome/css/font-awesome.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><i class="fa fa-pencil"></i> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <ApprovalCard name={faker.name.firstName()} description={faker.lorem.sentence()} avatar={faker.image.avatar()}/>
      </header>
    </div>
  );
}

export default App;
