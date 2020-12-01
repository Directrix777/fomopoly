import React, { Component } from 'react'
import {connect} from 'react-redux'
import {moveUserOneSpace, saveUsers} from '../actions/userActions'
import Roller from './Roller'

class TurnHandler extends Component{
    constructor(props)
    {
        super()
        this.state = {currentUserIndex: 0, firstDice: 3, secondDice: 4, total: 0, gotten: false}
    }

    currentUser() {
        return this.props.users[this.state.currentUserIndex]
    }

    roll()
    {
        const firstDice = parseInt((Math.random() * 6) + 1)
        const secondDice = parseInt((Math.random() * 6) + 1)
        const total = firstDice + secondDice
        const user = this.currentUser()
        this.setState({firstDice: firstDice, secondDice: secondDice, total: total, gotten: false});
        (function myLoop(i, action, id) {
            setTimeout(function() {
              action(id)                
              if (--i) myLoop(i, action, id);
            }, 500)
          })(total, this.props.moveUserOneSpace, user.id);
          this.nextTurn() 
    }

    componentDidUpdate() {
        if(this.state.firstDice === this.state.secondDice && !this.state.gotten)
        {
            this.setState({...this.state, gotten: true})
            this.prevTurn()
        }
    }

    nextTurn()
    {
        this.setState((previousState) => {
            if(this.state.currentUserIndex < this.props.users.length - 1)
            {
                return {currentUserIndex: previousState.currentUserIndex + 1}
            }
            else
            {
                //probably gonna wanna save here
                return {currentUserIndex: 0}
            }
        })
    }

    prevTurn()
    {
        this.setState((previousState) => {
            if(this.state.currentUserIndex === 0)
            {
                return {currentUserIndex: this.props.users.length - 1}
            }
            else
            {
                return {currentUserIndex: previousState.currentUserIndex - 1}
            }
        })
    }

    render(){
        
        return(
            <div className='turn-handler'>
                <p style={{margin: 0}}>Previous Roll:</p>
                <Roller first={this.state.firstDice} second={this.state.secondDice} total={this.state.total}/>
                <div className='roll-button' onClick={() => this.roll()}>Roll</div>
                <p>{`Now ${this.currentUser().name}'s Turn!`}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveUserOneSpace: (id) => dispatch(moveUserOneSpace(id)),
        saveUsers: (users) => dispatch(saveUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurnHandler)