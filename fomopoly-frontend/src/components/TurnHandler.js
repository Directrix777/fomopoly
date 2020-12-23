import React, { Component } from 'react'
import {connect} from 'react-redux'
import {moveUserOneSpace, saveUser, payToBank, payUser, doubleUser, resetDoubles} from '../actions/userActions'
import Roller from './Roller'
import Button from './Button'

class TurnHandler extends Component{
    constructor(props)
    {
        super()
        this.state = {currentUserIndex: 0, firstDice: 3, secondDice: 4, total: 0, rollable: 'active-button', landed: false, text: ''}
    }

    componentDidMount() {
        this.setState({...this.state, text: `Now ${this.currentUser().name}'s Turn!`})
    }

    currentUser() {
        return this.props.users[this.state.currentUserIndex]
    }

    handleRoll()
    {
        if(this.state.rollable !== 'disabled-button')
        {
            this.setState({...this.state, rollable: 'disabled-button'})
            this.roll()
            setTimeout(() => {
                if(this.state.firstDice !== this.state.secondDice)
                {
                    this.moveUser()
                    this.props.resetDoubles(this.currentUser().id)
                }
                else
                {
                    this.props.doubleUser(this.currentUser().id)
                    setTimeout(() => {
                        if(this.currentUser().doubles_rolled === 3)
                        {
                            this.currentUser().in_jail = true
                            this.currentUser().current_location = 10
                            this.props.resetDoubles(this.currentUser().id)
                            this.setState({...this.state, landed: true, text: `Three doubles in a row? Wait, that's illegal!`})
                        }
                        else
                        {
                            this.moveUser()
                        }
                    }, 150)
                }
            }, 150)

        }
    }

    handleLanding()
    {
        switch(this.currentUser().current_location)
        {
            case 4:
                this.props.payToBank(this.currentUser().id, 200)
                break
            case 30:
                this.currentUser().in_jail = true
                this.currentUser().current_location = 10
                this.props.resetDoubles(this.currentUser().id)
                this.setState({...this.state, text: 'Sent to jail! Oh no!'})
                break
            case 38:
                this.props.payToBank(this.currentUser().id, 100)
                break
            default:
                //nothing. This should only happen on free parking and just visiting/jail
        }
        this.setState({...this.state, landed: true})
    }

    roll()
    {
        const firstDice = parseInt((Math.random() * 6) + 1)
        const secondDice = parseInt((Math.random() * 6) + 1)
        const total = firstDice + secondDice
        this.setState({firstDice: firstDice, secondDice: secondDice, total: total, gotten: false});
    }

    moveUser()
    {
        const user = this.currentUser()
        const originalTotal = this.state.total
        const handleLanding = this.handleLanding.bind(this)
        const passGo = (() => this.props.payUser(this.currentUser().id, 200));
        (function myLoop(i, action) {
            setTimeout(function() {
                if(39 - user.current_location === originalTotal - i)
                {
                    console.log('Passing go just once!!!!!')
                    passGo()
                }
                action(user.id)       
                if (--i) 
                {
                    myLoop(i, action);
                }
                else 
                {
                    handleLanding()
                }
            }, 500)
        })(this.state.total, this.props.moveUserOneSpace);
    }

    nextTurn()
    {
        if (this.currentUser().doubles_rolled === 0 || this.currentUser().in_jail === true)
        {
            if(this.currentUser().in_jail === false)
            {
                this.props.resetDoubles(this.currentUser().id)
            }
            this.setState((previousState) => {
                if(this.state.currentUserIndex < this.props.users.length - 1)
                {
                    return {currentUserIndex: previousState.currentUserIndex + 1, rollable: 'active-button', landed: false}
                }
                else
                {
                    this.props.users.forEach((user) => {this.props.saveUser(user)})
                    return {currentUserIndex: 0, rollable: 'active-button', landed: false}
                }
            })
            setTimeout(() => {this.setState({...this.state, text: `Now ${this.currentUser().name}'s Turn!`})}, 150)
        }
        else
        {
            this.setState({...this.state, landed: false, rollable: 'active-button', text: `Doubles! Go again, ${this.currentUser().name}!`})
        }
    }

    render(){
        
        return(
            <div className='turn-handler'>
                <Roller first={this.state.firstDice} second={this.state.secondDice} total={this.state.total}/>
                <div className={this.state.rollable} onClick={() => this.handleRoll()}>Roll</div>
                <p style={{padding: 4}}>{this.state.text}</p>
                {this.renderButtons()}
            </div>
        )
    }

    renderButtons()
    {
        if(this.state.landed)
        {       
                return (
                    <>
                        <Button type='passive' text='End Turn' handleClick={this.nextTurn.bind(this)}/>
                    </>
                )
        }
        else if(this.currentUser().current_location === 10 && this.currentUser().in_jail === true)
        {
            if(this.state.rollable === 'active-button')
            {
                this.setState({...this.state, rollable: 'disabled-button', text: `You're in jail, ${this.currentUser().name}. What's next?`})
            }
            return (
                <>
                    <Button type='active' text='Pay Bail' handleClick={() => {
                        this.currentUser().in_jail = false
                        this.setState({...this.state, rollable: 'active-button', text: `You're free, ${this.currentUser().name}! Now you get to take your turn!`})
                        this.props.resetDoubles(this.currentUser().id)
                        this.props.payToBank(this.currentUser().id, 50)
                    }}/>
                    <Button type='active' text={`Roll for Doubles (${this.currentUser().doubles_rolled + 1})`} handleClick={() => {
                        this.roll()
                        setTimeout(() => {
                            if(this.state.firstDice === this.state.secondDice)
                            {
                                this.currentUser().in_jail = false
                                this.props.resetDoubles(this.currentUser().id)
                                this.moveUser()
                            }
                            else
                            {
                                this.props.doubleUser(this.currentUser().id)
                                if(this.currentUser().doubles_rolled === 3)
                                {
                                    this.currentUser().in_jail = false
                                    this.props.resetDoubles(this.currentUser().id)
                                    this.props.payToBank(this.currentUser().id, 50)
                                    this.moveUser()
                                }
                                else
                                {
                                    this.setState({...this.state, text: 'No luck! Try again next time!'})
                                    this.handleLanding()
                                }
                            }
                        }, 150)
                    }}/>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveUserOneSpace: (id) => dispatch(moveUserOneSpace(id)),
        saveUser: (user) => dispatch(saveUser(user)),
        payToBank: (id, amount) => dispatch(payToBank(id, amount)),
        payUser: (id, amount) => dispatch(payUser(id, amount)),
        doubleUser: (id) => dispatch(doubleUser(id)),
        resetDoubles: (id) => dispatch(resetDoubles(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurnHandler)