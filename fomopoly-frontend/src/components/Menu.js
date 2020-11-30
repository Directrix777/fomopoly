import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'
import NewUserCard from './NewUserCard'

class Menu extends Component {
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

export default connect(mapStateToProps)(Menu)