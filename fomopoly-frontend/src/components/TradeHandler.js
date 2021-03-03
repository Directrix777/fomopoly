import React, { Component } from 'react'

export default class MyComponent extends Component
{
    constructor(props)
    {
        super()
        this.state = {}
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
        return (<div>This is a wireframe from the Workshop</div>)
    }
}