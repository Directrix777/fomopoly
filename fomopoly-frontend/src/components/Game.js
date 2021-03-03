import React, { Component } from 'react'
import Board from './Board'
import { connect } from 'react-redux'
import {moveUserOneSpace} from '../actions/userActions'
import UserStatCard from './UserStatCard'
import TurnHandler from './TurnHandler'

class Game extends Component
{
    constructor(props)
    {
        super()
        this.state = {currentUserIndex: 0, trading: false}
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

    componentDidMount() {
        //this.interval = setInterval(this.fetchWeather, 15000);
        //can set up a constant fetch
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
        //would stop the fetch set up in componentDidMount
    }

    setCurrentUser(index)
    {
        this.setState({...this.state, currentUserIndex: index})
    }

    render()
    {
        return (
            <>
                {this.props.users.map((user) => {return <UserStatCard key={user.id} user={user}/>})}
                <Board />
                <TurnHandler trade={() => {this.setState({trading: true})}} setCurrentUser={this.setCurrentUser.bind(this)}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {moveUserOneSpace: (id) => dispatch(moveUserOneSpace(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)