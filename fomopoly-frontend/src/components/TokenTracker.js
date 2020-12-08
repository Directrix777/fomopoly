import React, { Component } from 'react'
import {connect} from 'react-redux'
import CAR from '../images/tokens/CAR.png'
import CAT from '../images/tokens/CAT.png'
import DOG from '../images/tokens/DOG.png'
import DUCK from '../images/tokens/DUCK.png'
import HAT from '../images/tokens/HAT.png'
import IRON from '../images/tokens/IRON.png'
import PENGUIN from '../images/tokens/PENGUIN.png'
import SHIP from '../images/tokens/SHIP.png'
import SHOE from '../images/tokens/SHOE.png'
import THIMBLE from '../images/tokens/THIMBLE.png'
import TREX from '../images/tokens/TREX.png'
import WHEELBARROW from '../images/tokens/WHEELBARROW.png'

class TokenTracker extends Component
{
    constructor(props)
    {
        super()
        this.state = {tokens: []}
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
        this.interval = setInterval(() => {this.setTokens()}, 150);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        //would stop the fetch set up in componentDidMount
    }

    setTokens() {
        let tokensOnThisSpace = []
        this.props.users.forEach((user) => {
            if(user.current_location === this.props.id)
            {
                tokensOnThisSpace.push(user.token)
            }
        })
        this.setState({...this.state, tokens: tokensOnThisSpace})
    }

    renderImage(token) {
        const closs = `icon-image ${this.props.side}-token`
        let spot = `icon-spot`
        let currentUser = this.props.users.filter((user) => {return user.token === token})[0] //All users must have unique tokens or this breaks
        if(currentUser.current_location === 10 && currentUser.in_jail === false) {
            spot = `just-visit-spot`
        }
        if(token === 'Car')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={CAR} alt='CAR TOKEN'/>
                </div>
            )
        }
        else if(token === 'Cat')
        {
            return (
                    <div className={spot}>
                        <img className={closs} src={CAT} alt='CAT TOKEN'/>
                    </div>
            )
        }
        else if(token === 'Dog')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={DOG} alt='DOG TOKEN'/>
                </div>
            )
        }
        else if(token === 'Duck')
        {
            return (
            <div className={spot}>
                <img className={closs} src={DUCK} alt='DUCK TOKEN'/>
            </div>
            )
        }
        else if(token === 'Hat')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={HAT} alt='HAT TOKEN'/>
                </div>
            )
        }
        else if(token === 'Iron')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={IRON} alt='IRON TOKEN'/>
                </div>
            )
        }
        else if(token === 'Penguin')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={PENGUIN} alt='PENGUIN TOKEN'/>
                </div>
            )
        }
        else if(token === 'Ship')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={SHIP} alt='SHIP TOKEN'/>
                </div>
            )
        }
        else if(token === 'Shoe')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={SHOE} alt='SHOE TOKEN'/>
                </div>
            )
        }
        else if(token === 'Thimble')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={THIMBLE} alt='THIMBLE TOKEN'/>
                </div>
            )
        }
        else if(token === 'T-rex')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={TREX} alt='T-REX TOKEN'/>
                </div>
            )
        }
        else if(token === 'Wheelbarrow')
        {
            return (
                <div className={spot}>
                    <img className={closs} src={WHEELBARROW} alt='WHEELBARROW TOKEN'/>
                </div>
            )
        }
        else
        {
            return <></>
        }
    }

    render()
    {
        return this.state.tokens.map((token) => {
            return this.renderImage(token)
        })
    }
}

const mapStateToProps = (state) => {
    return {users: state.users}
}

export default connect(mapStateToProps)(TokenTracker)