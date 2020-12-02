import React from 'react'
import TokenTracker from './TokenTracker'
import train from '../images/TRAIN.gif'
import electric from '../images/ELECTRIC.jpg'
import water from '../images/WATER.jpg'
import luxury from '../images/LUXURY.jpg'
import income from '../images/INCOME.png'
import chance from '../images/CHANCE.png'
import chest from '../images/CHEST.gif'

const renderColor = (space) => {
    if(space.color !== null)
    {
    return <div className={`color-indicator-${space.color}`}/>
    }
}

const renderPrice = (space) => {
    if(space.price !== null)
    {
        if(space.color === 'Mint')
        {
            if(space.name === 'Electric Company')
            {
                return (
                    <>
                        <div className='icon-spot'>
                            <img className='icon-image' src={electric} alt='ELECTRIC'/>
                        </div>
                        <p style={{marginTop: 50, marginBottom: 'auto'}}>₣{space.price}</p>
                    </>
                )
            }
            else
            {
                return (
                    <>
                        <div className='icon-spot'>
                            <img className='icon-image' src={water} alt='water'/>
                        </div>
                        <p style={{marginTop: 50, marginBottom: 'auto'}}>₣{space.price}</p>
                    </>
                )
            }
        }
        else if(space.color === 'Black')
        {
            return (
                <>
                    <div className='icon-spot'>
                        <img className='icon-image' src={train} alt='TRAIN'/>
                    </div>
                    <p style={{marginTop: 50, marginBottom: 'auto'}}>₣{space.price}</p>
                </>
            )
        }
        else
        {
            return <p style={{marginTop: 22, marginBottom: 'auto'}}>₣{space.price}</p>
        }
    }
}

const renderIcon = (space) => {
    if (space.color === null)
    {
        if(space.name === 'Income Tax')
        {
            return (
                <>
                    <div className='icon-spot'>
                        <img className='icon-image' src={income} alt='INCOME'/>
                    </div>
                    <p style={{marginTop: 50, marginBottom: 'auto'}}>PAY ₣{space.flat_rent}</p>
                </>
            )
        }
        else if(space.name === 'Luxury Tax')
        {
            return (
                <>
                    <div className='icon-spot'>
                        <img className='icon-image' src={luxury} alt='LUXURY'/>
                    </div>
                    <p style={{marginTop: 50, marginBottom: 'auto'}}>PAY ₣{space.flat_rent}</p>
                </>
            )
        }
        else if(space.name === 'Chance')
        {
            return (
                <>
                    <div className='icon-spot'>
                        <img className='icon-image' src={chance} alt='CHANCE'/>
                    </div>
                </>
            )
        }
        else if(space.name === 'Chance')
        {
            return (
                <>
                    <div className='icon-spot'>
                        <img className='icon-image' src={chance} alt='CHANCE'/>
                    </div>
                </>
            )
        }
        else
        {
            return (
                <>
                    <div className='icon-spot'>
                        <img className='icon-image' src={chest} alt='CHEST'/>
                    </div>
                </>
            )
        }
    }
}

export default function Space(props) {
        return(
            <div className={`${props.side}-space`}>
                {renderColor(props.space)}
                <p style={{height: 50}}>{props.space.name.toUpperCase()}</p>
                {renderPrice(props.space)}
                {renderIcon(props.space)}
                <TokenTracker id={props.space.id} side={props.side}/>
            </div>
        )
} 