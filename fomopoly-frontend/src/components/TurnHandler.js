import React, { Component } from 'react'
import {connect} from 'react-redux'
import {moveUserOneSpace} from '../actions/userActions'

class TurnHandler extends Component{
    constructor(props)
    {
        super()
        this.state = {currentUserIndex: 0, firstDice: 6, secondDice: 6, total: 0}
    }

    roll()
    {
        const firstDice = parseInt((Math.random() * 6) + 1)
        const secondDice = parseInt((Math.random() * 6) + 1)
        this.setState({firstDice: firstDice, secondDice: secondDice, total: firstDice + secondDice})
    }

    // ⚀ ⚁ ⚂ ⚃ ⚄ ⚅

    nextTurn()
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

    render(){
        return(
            <div className='turn-handler'>
                {/* <Roller first={this.state.firstDice} second={this.state.secondDice} total={this.state.total}/> */}
                <div className='start-button' onClick={() => this.props.roll()}></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {moveUserOneSpace: (id) => dispatch(moveUserOneSpace(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(TurnHandler)