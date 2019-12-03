import React, { Component } from 'react'
// import axios from 'axios'

export default class Login extends Component {
    
    render() {
        return (
            <div>
            <form action="http://192.168.125.251:3001/users" method="POST">
                Username: <input type="text" name="username"/>  <br/>          
                First Name: <input type="text" name="first_name" /><br/>
                Last Name: <input type="text" name="last_name" /><br/>
                City: <input type="text" name="city" /><br/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
