import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {moveUserOneSpace, saveUser, payToBank, payUser, doubleUser, resetDoubles} from '../actions/userActions'
import {sellSpace, saveSpace} from '../actions/spaceActions'
import Roller from './Roller'
import Button from './Button'
import PropCard from './PropCard'

class TurnHandler extends Component{
    constructor(props)
    {
        super()
        this.state = {currentUserIndex: 0, firstDice: 3, secondDice: 4, total: 0, rollable: 'active-button', landed: false, ended: false, text: '', location: 'Go', spacesToSave: []}
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
                            this.setState({...this.state, landed: true, text: `Three doubles in a row? Wait, that's illegal!`, location: this.props.spaces[this.currentUser().current_location - 1]})
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
                this.setState({...this.state, text: 'Sent to jail! Oh no!', location: this.props.spaces[this.currentUser().current_location - 1]})
                break
            case 38:
                this.props.payToBank(this.currentUser().id, 100)
                break
            default:
                //nothing. This should only happen on free parking and just visiting/jail
        }
        console.log(this.props.spaces[this.currentUser().current_location - 1].name)
        if(!this.currentUser().in_jail)
        {
            this.setState({...this.state, landed: true, location: this.props.spaces[this.currentUser().current_location - 1]})
        }
        else
        {
            this.setState({...this.state, landed: true})
        }
    }

    roll()
    {
        const firstDice = parseInt((Math.random() * 6) + 1)
        const secondDice = parseInt((Math.random() * 6) + 1)
        const total = firstDice + secondDice
        this.setState({firstDice: firstDice, secondDice: secondDice, total: total});
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
                    return {currentUserIndex: previousState.currentUserIndex + 1, rollable: 'active-button', landed: false, ended: false}
                }
                else
                {
                    this.props.users.forEach((user) => {this.props.saveUser(user)})
                    this.state.spacesToSave.forEach((space) => {this.props.saveSpace(this.props.spaces[space - 1])})
                    return {currentUserIndex: 0, rollable: 'active-button', landed: false, ended: false, spacesToSave: []}
                }
            })
            {setTimeout(() => {
                if(!this.currentUser().in_jail)
                {
                    this.setState({...this.state, text: `Now ${this.currentUser().name}'s Turn!`})
                }
                this.props.setCurrentUser(this.state.currentUserIndex)
            }, 150)}
        }
        else
        {
            this.setState({...this.state, landed: false, ended: false, rollable: 'active-button', text: `Doubles! Go again, ${this.currentUser().name}!`})
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
                        <Button type='passive' text='Dev End Turn' handleClick={this.nextTurn.bind(this)}/>
                        <PropCard space={this.state.location} fullSet={this.isFullSet(this.state.location.color)}/>
                        {this.landedButtons()}
                    </>
                )
        }
        else if(this.currentUser().in_jail === true)
        {
            if(this.state.rollable === 'active-button')
            {
                this.setState({...this.state, rollable: 'disabled-button', text: `You're in jail, ${this.currentUser().name}. What's next?`})
            }
            return (
                <>
                    <Button type='active' text='Pay Bail ₣50' handleClick={() => {
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
                                    this.setState({...this.state, text: 'No luck! Try again next time!', location: this.props.spaces[this.currentUser().current_location - 1]})
                                    this.handleLanding()
                                }
                            }
                        }, 150)
                    }}/>
                </>
            )
        }
    }

    landedButtons() 
    {
        if(!this.state.ended)
        {
            if(this.state.location.color)
            {
                if(!(this.state.location.user_id))
                {
                    return(
                        <Button type='active' text={`Buy Property ₣${this.state.location.price}`} handleClick={() => {
                            this.props.payToBank(this.currentUser().id, this.state.location.price)
                            this.props.sellSpace(this.state.location.id, this.currentUser().id)
                            setTimeout(() => {
                                this.state.spacesToSave.push(this.state.location.id)
                                this.setState({...this.state, ended: true})
                            }, 250)
                        }}/>
                    )
                }
                else
                {
                    if(this.state.location.user_id !== this.currentUser().id && this.state.text !== `${(this.getUserName(this.state.location.user_id))} owns this space!`)
                    {
                        this.setState({...this.state, text: `${(this.getUserName(this.state.location.user_id))} owns this space!`})
                    }
                    else if(this.state.location.user_id === this.currentUser().id)
                    {
                        this.setState({...this.state, text: `You own this space, ${(this.getUserName(this.state.location.user_id))}!`, ended: true})
                    }
                    let rent = this.handleRent(this.state.location)
                    return(
                        <Fragment>
                            <Button type='active' text={`Pay Rent: ₣${rent}`} handleClick={() => {
                                this.props.payToBank(this.currentUser().id, rent)
                                this.props.payUser(this.state.location.user_id, rent)
                                this.setState({...this.state, ended: true})
                            }}/>
                        </Fragment>
                    )
                }
            }
        }
        else
        {
            return(
                <>
                    <Button type='active' text='Trade Properties' handleClick={() => {this.props.trade()}}/>
                    <Button type='passive' text='End Turn' handleClick={this.nextTurn.bind(this)}/>
                </>
            )
        }
    }

    getUserName(userId)
    {
        let users = this.props.users
        for(let i = 0; i < users.length; i++)
        {
            if(users[i].id === userId)
            {
                return users[i].name
            }
        }
        return "No one"
    }

    handleRent(space)
    {
        switch(space.color)
        {
            case 'Mint':
                switch(space.id)
                {
                    case 12:
                        if(this.props.spaces[27].user_id === space.user_id)
                        {
                            return (this.state.total * 10)
                        }
                        else
                        {
                            return (this.state.total * 4)
                        }
                    case 28:
                        if(this.props.spaces[11].user_id === space.user_id)
                        {
                            return (this.state.total * 10)
                        }
                        else
                        {
                            return (this.state.total * 4)
                        }
                    default: 
                        break
                }
                break
            case 'Black':
                let rent = 25
                for(let i = 4; i < 39; i += 10)
                {
                    if(this.props.spaces[i].user_id === space.user_id && this.props.spaces[i].id !== space.id)
                    {
                        rent = rent * 2
                    }
                }
                return rent
            default:
                if(this.isFullSet(space.color))
                {
                    return space.flat_rent * 2
                }
                else
                {
                    return space.flat_rent
                }
                
        }
    }

    isFullSet(color) //Takes in string argument
    {
        if(!color)
        {
            return false
        }
        let colorValues= {"Brown" : [0,2], "Light Blue" : [5,7,8], "Magenta" : [10,12,13], "Orange" : [15,17,18], "Red" : [20,22,23], "Yellow" : [25,26,28], "Green" : [30,31,33], "Blue" : [37, 39], "Black" : [4, 14, 24, 34], "Mint" : [11, 27]}
        let colorSet = colorValues[color]
        let userId = this.props.spaces[colorSet[0]].user_id
        for(let i = 1; i < colorSet.length; i++)
        {
            if(this.props.spaces[colorSet[i]].user_id !== userId)
            {
                return false
            }
        }
        return true
    }
}

const mapStateToProps = (state) => {
    return{users: state.users, spaces: state.spaces}
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveUserOneSpace: (id) => dispatch(moveUserOneSpace(id)),
        saveUser: (user) => dispatch(saveUser(user)),
        payToBank: (id, amount) => dispatch(payToBank(id, amount)),
        payUser: (id, amount) => dispatch(payUser(id, amount)),
        doubleUser: (id) => dispatch(doubleUser(id)),
        resetDoubles: (id) => dispatch(resetDoubles(id)),
        sellSpace: (space_id, user_id) => dispatch(sellSpace(space_id, user_id)),
        saveSpace: (space) => dispatch(saveSpace(space))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurnHandler)