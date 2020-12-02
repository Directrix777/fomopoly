import React, { Component } from 'react'
import {connect} from 'react-redux'
import {moveUserOneSpace, saveUsers, movingUser, doneMovingUser} from '../actions/userActions'
import Roller from './Roller'

class TurnHandler extends Component{
    constructor(props)
    {
        super()
        this.state = {currentUserIndex: 0, firstDice: 3, secondDice: 4, total: 0, moving: props.moving}
    }

    currentUser() {
        return this.props.users[this.state.currentUserIndex]
    }

    handleRoll()
    {
        if(!this.props.moving)
        {
            this.roll()
        }
    }

    roll()
    {
        const firstDice = parseInt((Math.random() * 6) + 1)
        const secondDice = parseInt((Math.random() * 6) + 1)
        const total = firstDice + secondDice
        const user = this.currentUser()
        const nextTurn = this.nextTurn.bind(this)
        const done = this.props.doneMovingUser
        this.setState({firstDice: firstDice, secondDice: secondDice, total: total, gotten: false});
        this.props.movingUser();
        (function myLoop(i, action, id) {
            setTimeout(function() {
                action(id)            
                if (--i) 
                {
                    myLoop(i, action, id);
                }
                else 
                {
                    done()
                    nextTurn()
                }
            }, 500)
          })(total, this.props.moveUserOneSpace, user.id);
          //this.nextTurn() 
    }

    nextTurn()
    {
        if (this.state.firstDice !== this.state.secondDice)
        {
            this.setState((previousState) => {
                if(this.state.currentUserIndex < this.props.users.length - 1)
                {
                    return {currentUserIndex: previousState.currentUserIndex + 1}
                }
                else
                {
                    //gonna wanna save here
                    return {currentUserIndex: 0}
                }
            })
        }
    }

    render(){
        
        return(
            <div className='turn-handler'>
                <Roller first={this.state.firstDice} second={this.state.secondDice} total={this.state.total}/>
                <div className='roll-button' onClick={() => this.handleRoll()}>Roll</div>
                <p>{`Now ${this.currentUser().name}'s Turn!`}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{users: state.users, moving: state.moving}
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveUserOneSpace: (id) => dispatch(moveUserOneSpace(id)),
        saveUsers: (users) => dispatch(saveUsers(users)),
        movingUser: () => dispatch(movingUser()),
        doneMovingUser: () => dispatch(doneMovingUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurnHandler)