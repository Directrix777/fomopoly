import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'
import {fetchUsers, deleteUser} from '../actions/userActions'
import NewUserCard from './NewUserCard'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    
    componentDidMount() {
        this.interval = setInterval(this.props.fetchUsers, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return(
            <>
                <div className='start-button'>
                    <NavLink to='/about'>About Fomopoly</NavLink>
                </div>
                <div className='start-button'>
                    <NavLink to='/game'>Start Game</NavLink>
                </div>
                <UserForm />
                {this.props.users.map((user) => {return <NewUserCard key={user.id} user={user} delete={this.props.deleteUser}/>})}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)