import React from 'react';
import './App.css';
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import List from './components/List'
class App extends React.Component {
componentDidMount(){
  axios.get("http://192.168.125.251:3000/")
  .then(res=>{
    console.log('res',res)
  
  })
  .catch(err=>{
    console.error('error')
  })
}

newUser = () => {
  const User = {
      username: '',
      firstName: '',
      lastName: '',
      city: '',
      image: ''
      
  }
  axios.post("http://192.168.125.251:3000/users", {User})
  .then(res=>{
      console.log('Created Users!')
  })
  .catch(err=>{
      console.error('Eroor')
  })
}


render (){

  return (
    <div className="App">
     
     <Link to="/signup">SignUp</Link>
     <Link to="/list">List of Users</Link>

<Switch>

    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/list" component={List} />

</Switch>

    </div>
  );
}
}

export default App;
