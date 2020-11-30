import React, { Component } from 'react'
import Board from './Board'
import { connect } from 'react-redux'
import {createUser} from '../actions/userActions'

class Game extends Component
{
    constructor(props)
    {
        super()
        this.state = {}
    }

    changeSomethingOnDeeperLevelOfState()
    {
        this.setState({
            keyOfDeeperLevel: {
              ...this.state.keyOfDeeperLevel,
              thingWeWannaChange: 'New Value'
            }
          });
    }

    changeStateDynamically()
    {
        this.setState((previousState) => {return {value: previousState.value + 1}})
        //Just adding one as an example. You could call a function on this data if you wanted.
        //previousState parameter is automatically passed in. Name is descriptive.
    }

    componentDidMount() {
        //this.interval = setInterval(this.fetchWeather, 15000);
        //can set up a constant fetch
        // this.props.createUser({name: 'Trixie', token: 'cat'})
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
        //would stop the fetch set up in componentDidMount
    }

    render()
    {
        return (<Board />)
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {createUser: (user) => dispatch(createUser(user))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)