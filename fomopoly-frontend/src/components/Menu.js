import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/userActions'
import NewUserCard from './NewUserCard'

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
                <UserForm />
                {this.props.users.map((user) => {return <NewUserCard key={user.id} user={user}/>})}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {fetchUsers: () => dispatch(fetchUsers())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)