import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchSpaces} from '../actions/spaceActions'
import Street from './Street'

class Board extends Component
{
    constructor(props)
    {
        super()
        this.state = {spaces: props.spaces}
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
        //previousState parameter is automatically passed in. Name is solely descriptive.
    }

    componentDidMount() {
        //this.interval = setInterval(this.fetchWeather, 15000);
        //can set up a constant fetch
        this.props.fetchSpaces()
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
        //would stop the fetch set up in componentDidMount
    }

    render()
    {
        if (!this.props.loading && this.props.spaces.length !== 0)
        {
            return (
            <div className='board'>
                <Street spaces={this.props.spaces.slice(0, 9).reverse()} side='left'/>
                <Street spaces={this.props.spaces.slice(10, 19)} side='top'/>
                <Street spaces={this.props.spaces.slice(20, 29)} side='right'/>
                <Street spaces={this.props.spaces.slice(30, 39)} side='bottom'/>
            </div>
            )
        }
        else
        {
            return(
                <div className='board'>
                    Loading Board
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{spaces: state.spaces, loading: state.loading}
}

const mapDispatchToProps = (dispatch) => {
    return{fetchSpaces: () => dispatch(fetchSpaces())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)