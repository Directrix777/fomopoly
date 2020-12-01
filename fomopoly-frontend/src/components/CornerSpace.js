import React from 'react'
import TokenTracker from './TokenTracker'
import jail from '../images/JAIL.jpg'
import freeParking from '../images/FREE_PARKING.jpg'
import goToJail from '../images/GO_TO_JAIL.jpg'
import go from '../images/Go-Monopoly.gif'

export default function CornerSpace(props) {
    switch(props.space.id)
    {
        case 10:
            return (
                <div className='jail-corner'>
                    <img className='jail-image' src={jail} alt='JAIL'/>
                    <TokenTracker id={props.space.id}/>
                </div>
            )
        case 20:
            return (
                <div className='free-parking-corner'>
                    <img className='free-parking-image' src={freeParking} alt='FREE PARKING'/>
                    <TokenTracker id={props.space.id}/>
                </div>
            )
        case 30:
            return (
                <div className='go-to-jail-corner'>
                    <img className='go-to-jail-image' src={goToJail} alt='GO TO JAIL'/>
                    <TokenTracker id={props.space.id}/>
                </div>
            )
        case 40:
            return (
                <div className='go-corner'>
                    <img className='go-image' src={go} alt='GO'/>
                    <TokenTracker id={props.space.id}/>
                </div>
            )

    }
}