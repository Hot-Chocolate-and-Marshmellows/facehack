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
        axios.get('http://192.168.125.251:3000').then(allTheUsers=>{
          console.log(allTheUsers)
          this.setState({
            
          })
        })
    }
    showTheUsers = () => {
        return this.state.allTheUsers.map(eachUser=> {
            return (
                    <Link to={`/Userdetail/${eachUser_id}`}>
                    <li>
                    <h4>{eachUsersname}</h4>
                    <img src={eachUsersimage_url} width="200px"/>
                    <p>{eachUserdescription}</p>
                    </li>
                    </Link>
                    )
        })
    }

    render() {
        return (
            <div>
                Users
                {/* {this.showTheUsers()} */}
            </div>
        );
    }
}

export default List;