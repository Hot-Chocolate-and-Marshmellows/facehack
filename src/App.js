import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import List from './List'
class App extends React.Component {
componentDidMount(){
//   axios.get("192.168.125.251:3000")
//   .then(res=>{
//     console.log('res')
//   })
//   .catch(err=>{
//     console.error('error')
//   })
// }
}

render (){

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <List />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
