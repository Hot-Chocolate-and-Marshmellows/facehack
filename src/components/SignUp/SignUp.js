import React, { Component } from 'react'
// import axios from 'axios'

export default class Login extends Component {
    
    render() {
        return (
            <div>
            <form action="/list" method="POST" onSubmit={this.newUser}>
                Username: <input type="text" name="username"/>  <br/>          
                First Name: <input type="text" name="firstName" /><br/>
                Last Name: <input type="text" name="lastName" /><br/>
                Image URL: <input type="text" name="image" /><br/>
                City: <input type="text" name="city" /><br/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}