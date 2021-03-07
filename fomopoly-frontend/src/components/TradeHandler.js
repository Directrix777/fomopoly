import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import TraderCard from './TraderCard'
import {sellSpace} from '../actions/spaceActions'
import {payToBank, payUser} from '../actions/userActions'

class TradeHandler extends Component
{
    constructor(props)
    {
        super()
        this.state = {users: props.users, trade: false}
    }

    currentUser()
    {
        return this.state.users[this.props.currentUserIndex]
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
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
        //would stop the fetch set up in componentDidMount
    }

    render()
    {
        return (
            <div className='trade-handler'>
                <div className='close-button'>
                    <Button type='passive' text='Close' handleClick={() => {this.props.close()}}/>
                </div>
                {this.renderPlayerSelector()}
            </div>
        )
    }

    renderPlayerSelector()
    {
        if(this.state.trade === false)
        {
            return(
                <>
                    <p style={{fontSize: '20px'}}>{`Who would you like to trade with, ${this.currentUser().name}?`}</p>
                    {this.state.users.map((user) => {
                        if(user.id !== this.currentUser().id)
                        {
                            return (
                                <TraderCard user={user}/>
                            )
                        }
                        else
                        {
                            return(
                                <>
                                </>
                            )
                        }
                    })}
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
        payToBank: (id, amount) => dispatch(payToBank(id,amount)),
        payUser: (id, amount) => dispatch(payUser(id, amount)),
        sellSpace: (space_id, user_id) => dispatch(sellSpace(space_id, user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeHandler)