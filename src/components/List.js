import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class List extends Component {

    state= {
        allTheUsers:[]
    }

    componentDidMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        console.log('hi')
        //http://192.168.125.251:3000/
        axios.get('http://192.168.125.251:3001/users')
        .then(res=>{
          console.log(res)
          this.setState({
            allTheUsers: res.data
          })
        })
    }
    showTheUsers = () => {
        return this.state.allTheUsers.map(eachUser=> {
            return (
                    <Link to={`/user/${eachUser.username}`}>
                    <li>
                    <h4>{eachUser.username}</h4>
                    <h4>{eachUser.first_name}</h4>
                    <h4>{eachUser.last_name}</h4>
                    <h4>{eachUser.city}</h4>
                    
                    </li>
                    </Link>
                    )
        })
    }

    render() {
        return (
            <div>
                Users
                {this.showTheUsers()}
            </div>
        );
    }
}

export default List;