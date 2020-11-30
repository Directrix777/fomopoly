import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'

class Menu extends Component {
    render() {
        return(
            <>
                <UserForm />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

export default connect(mapStateToProps)(Menu)