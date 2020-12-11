import React, { Component } from 'react'
import {connect} from 'react-redux'
import {moveUserOneSpace, saveUser, movingUser, doneMovingUser} from '../actions/userActions'
import Roller from './Roller'

class TurnHandler extends Component{
    constructor(props)
    {
        super()
        this.state = {currentUserIndex: 0, firstDice: 3, secondDice: 4, total: 0, moving: props.moving, rollable: 'active-button', landed: false}
    }

    currentUser() {
        return this.props.users[this.state.currentUserIndex]
    }

    handleRoll()
    {
        if(!this.props.moving)
        {
            
            this.setState({...this.state, rollable: 'disabled-button'})
            this.interval = setInterval(this.makeRollable.bind(this), 150)
            this.roll()

        }
    }

    makeRollable()
    {
        if(!this.props.moving)
        {
            this.setState({...this.state, rollable: 'active-button'})
            clearInterval()
        }
    }

    handleLanding()
    {
        if(this.currentUser().current_location === 30)
        {
            this.currentUser().in_jail = true
            this.currentUser().current_location = 10
        }
        this.setState({...this.state, landed: true})
    }

    roll()
    {
        const firstDice = parseInt((Math.random() * 6) + 1)
        const secondDice = parseInt((Math.random() * 6) + 1)
        const total = firstDice + secondDice
        const user = this.currentUser()
        const handleLanding = this.handleLanding.bind(this)
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
                    handleLanding()
                }
            }, 500)
          })(total, this.props.moveUserOneSpace, user.id);
          //this.nextTurn() 
    }

    nextTurn()
    {
        this.setState({...this.state, landed: false})
        if (this.state.firstDice !== this.state.secondDice)
        {
            this.setState((previousState) => {
                if(this.state.currentUserIndex < this.props.users.length - 1)
                {
                    return {currentUserIndex: previousState.currentUserIndex + 1}
                }
                else
                {
                    console.log(this.props.users)
                    this.props.users.forEach((user) => {this.props.saveUser(user)})
                    return {currentUserIndex: 0}
                }
            })
        }
    }

    render(){
        
        return(
            <div className='turn-handler'>
                <Roller first={this.state.firstDice} second={this.state.secondDice} total={this.state.total}/>
                <div className={this.state.rollable} onClick={() => this.handleRoll()}>Roll</div>
                <p>{`Now ${this.currentUser().name}'s Turn!`}</p>
                {this.renderButtons()}
            </div>
        )
    }

    renderButtons()
    {
        if(this.state.landed)
        {
            //Render the Button components here
            console.log('supposed to render the buttons here!')
        }
    }
}

const mapStateToProps = (state) => {
    return{users: state.users, moving: state.moving}
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveUserOneSpace: (id) => dispatch(moveUserOneSpace(id)),
        saveUser: (user) => dispatch(saveUser(user)),
        movingUser: () => dispatch(movingUser()),
        doneMovingUser: () => dispatch(doneMovingUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurnHandler)