import React, { Component } from 'react'
import {connect} from 'react-redux'

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
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
        //would stop the fetch set up in componentDidMount
    }

    render()
    {
        return (<div>This is a wireframe from the Workshop</div>)
    }
}

const mapStateToProps = (state) => {
    return{spaces: state.spaces}
}

export default connect()(Board)